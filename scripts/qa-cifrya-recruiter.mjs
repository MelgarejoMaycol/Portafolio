// Revisión externa del modo demo Cifrya, como reclutador, SIN credenciales ni API de producción.
// Las operaciones se realizan solo en el almacenamiento local aislado de cada navegador.
import { chromium } from 'playwright'
import { mkdirSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const base='https://cifrya.com'
const dir=resolve(process.cwd(),'qa-cifrya-recruiter')
mkdirSync(dir,{recursive:true})
const sizes=[{name:'escritorio',width:1440,height:900},{name:'movil',width:390,height:844}]
const all=[]
const browser=await chromium.launch()
for (const size of sizes){
 const ctx=await browser.newContext({viewport:{width:size.width,height:size.height},serviceWorkers:'block',reducedMotion:'reduce'})
 const page=await ctx.newPage()
 const result={size:size.name,checks:[],errors:[],requestsToApi:[]}
 page.on('pageerror',e=>result.errors.push(e.message))
 page.on('request',r=>{if(r.url().includes('/api/v1'))result.requestsToApi.push(r.url())})
 const run=async (label,fn)=>{
  try{await fn();result.checks.push({name:label,ok:true});console.log('PASS '+size.name+' '+label)}
  catch(e){const msg=String(e?.message||e).slice(0,1200);result.checks.push({name:label,ok:false,error:msg});console.log('FAIL '+size.name+' '+label+': '+msg);await page.screenshot({path:resolve(dir,size.name+'-error-'+label.replace(/[^a-z0-9]+/ig,'-')+'.png'),timeout:7000}).catch(()=>{})}
 }
 await run('acceso-demo-sin-registro',async()=>{
  const r=await page.goto(base+'/demo',{waitUntil:'domcontentloaded',timeout:45000})
  if(r.status()!==200)throw Error('HTTP '+r.status())
  await page.waitForURL(/\/app\/dashboard(?:[?#]|$)/,{timeout:45000})
  await page.getByRole('heading',{name:'Inicio',exact:true}).waitFor({timeout:20000})
  // En móvil el nombre de usuario está dentro del menú contraído: no es un error de la demo.
  await page.getByText('Usuario Demo').first().waitFor({state:'attached',timeout:15000})
  if(size.width<768){
    const menu=page.getByRole('button',{name:'Abrir menú principal'})
    await menu.click()
    await page.getByRole('link',{name:'Cuentas'}).first().waitFor({state:'visible',timeout:10000})
    // El menú muestra enlaces en móvil; la etiqueta de cuenta sigue oculta por CSS, aunque existe en DOM.
    await menu.click()
  }
  await page.getByText('Bancolombia').first().waitFor()
  await page.screenshot({path:resolve(dir,size.name+'-dashboard.png'),fullPage:true,animations:'disabled'})
 })
 const pages=[
  ['cuentas','/app/accounts','Cuentas'],
  ['movimientos','/app/transactions','Movimientos'],
  ['presupuestos','/app/budgets','Presupuestos'],
  ['metas','/app/goals','Metas de ahorro'],
  ['reportes','/app/reports','Análisis financiero'],
  ['categorias','/app/categories','Categorías'],
  ['configuracion','/app/settings','Configuración']
 ]
 for (const [slug,path,heading] of pages){
  await run('navegacion-'+slug,async()=>{
   await page.goto(base+path,{waitUntil:'domcontentloaded',timeout:35000})
   await page.getByRole('heading',{name:heading,exact:true}).first().waitFor({timeout:25000})
   const dimensions=await page.evaluate(()=>({w:document.documentElement.clientWidth,scrollWidth:document.documentElement.scrollWidth}))
   if(dimensions.scrollWidth>dimensions.w+4)throw Error('Desbordamiento horizontal '+JSON.stringify(dimensions))
   if(['cuentas','movimientos','presupuestos','configuracion'].includes(slug)){
    await page.screenshot({path:resolve(dir,size.name+'-'+slug+'.png'),fullPage:true,animations:'disabled'})
   }
  })
 }
 await run('crear-cuenta-demo',async()=>{
  await page.goto(base+'/app/accounts',{waitUntil:'domcontentloaded',timeout:35000})
  await page.getByRole('heading',{name:'Cuentas',exact:true}).waitFor()
  await page.getByRole('button',{name:'Nueva cuenta'}).first().click()
  const dlg=page.getByRole('dialog',{name:'Nueva cuenta'})
  await dlg.waitFor()
  await dlg.getByLabel('Nombre').fill('Validación pública reclutador')
  await dlg.getByLabel('Tipo').click()
  await dlg.getByRole('listbox').getByRole('option',{name:/Cuenta de ahorros/}).click()
  await dlg.getByLabel('Institución').fill('Banco ficticio de prueba')
  await dlg.getByLabel('Saldo inicial').fill('15000000')
  await dlg.getByRole('button',{name:'Crear cuenta'}).click()
  await page.getByText('Validación pública reclutador').first().waitFor({timeout:15000})
 })
 await run('registro-y-reversion-movimiento-demo',async()=>{
  await page.goto(base+'/app/transactions',{waitUntil:'domcontentloaded',timeout:35000})
  await page.getByRole('heading',{name:'Movimientos',exact:true}).waitFor()
  await page.getByRole('button',{name:'Registrar movimiento'}).first().click()
  const dlg=page.getByRole('dialog',{name:'Registrar movimiento'})
  await dlg.waitFor()
  await dlg.getByRole('radio',{name:/Ingreso/}).click()
  await dlg.getByRole('combobox',{name:/Destino/}).click()
  await dlg.getByRole('option').filter({hasText:/Cuenta · Saldo actual/}).first().click()
  await dlg.getByRole('button',{name:'Categoría'}).click()
  await dlg.getByRole('listbox').getByRole('option').first().click()
  await dlg.getByRole('textbox',{name:'Monto'}).fill('123400')
  await dlg.getByLabel('Descripción').fill('Operación de prueba automatizada')
  await dlg.getByRole('button',{name:'Registrar movimiento'}).click()
  const created=page.getByText('Operación de prueba automatizada').first()
  await created.waitFor({timeout:15000})
  await created.click()
  const detail=page.getByRole('dialog',{name:'Detalle del movimiento'})
  await detail.waitFor()
  await detail.getByRole('button',{name:'Eliminar'}).click()
  const confirm=page.getByRole('dialog',{name:'Eliminar movimiento'})
  await confirm.getByRole('button',{name:'Eliminar'}).click()
  await page.getByRole('status').filter({hasText:'Movimiento eliminado y saldo revertido.'}).waitFor({timeout:15000})
 })
 await run('demo-sin-llamadas-privadas-api',async()=>{
  if(result.requestsToApi.length)throw Error('Solicitudes observadas: '+result.requestsToApi.slice(0,4).join('; '))
 })
 await run('sin-errores-javascript',async()=>{if(result.errors.length)throw Error(result.errors.slice(0,4).join('; '))})
 all.push(result)
 await ctx.close()
}
await browser.close()
const failed=all.flatMap(r=>r.checks.filter(x=>!x.ok).map(x=>r.size+': '+x.name+': '+x.error))
writeFileSync(resolve(dir,'resultado.json'),JSON.stringify({checkedAt:new Date().toISOString(),base,all,failed},null,2))
console.log('RESUMEN '+(all.flatMap(x=>x.checks).length-failed.length)+'/'+all.flatMap(x=>x.checks).length+' comprobaciones aprobadas')
if(failed.length)process.exitCode=1
