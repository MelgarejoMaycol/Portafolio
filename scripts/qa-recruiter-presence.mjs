import { chromium } from 'playwright'
import { mkdirSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const dir=path.resolve(process.cwd(), 'qa-recruiter-presence')
mkdirSync(dir,{recursive:true})
const pages=[
 {name:'github',url:'https://github.com/MelgarejoMaycol'},
 {name:'portfolio',url:'https://melgarejomaycol.vercel.app/'},
 {name:'linkedin',url:'https://co.linkedin.com/in/maycol-melgarejo-a59bb9322/'}
]
const viewports=[
 {name:'pc',width:1440,height:900},
 {name:'mobile',width:390,height:844}
]
const browser=await chromium.launch()
const report=[]
for(const viewport of viewports){
 const context=await browser.newContext({viewport:{width:viewport.width,height:viewport.height},locale:'es-CO',reducedMotion:'reduce'})
 for(const target of pages){
  const page=await context.newPage()
  const row={page:target.name,viewport:viewport.name,url:target.url}
  try{
   const response=await page.goto(target.url,{waitUntil:'domcontentloaded',timeout:40000})
   await page.waitForTimeout(1800)
   row.http=response?.status()
   row.finalUrl=page.url()
   row.title=await page.title()
   row.h1=await page.locator('h1').allTextContents().then(v=>v.map(s=>s.trim()).filter(Boolean).slice(0,5))
   row.bodyPreview=(await page.locator('body').innerText().catch(()=>''))?.slice(0,900)
   const dims=await page.evaluate(()=>({client:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth}))
   row.horizontalOverflow=dims.scroll>dims.client+5
   row.restricted=/\/(login|signup|checkpoint|authwall)(\/|\?|$)/i.test(row.finalUrl)
      || (/join now|sign in to linkedin|inicia sesión en linkedin|únete ahora/i.test(row.bodyPreview||'') && target.name==='linkedin')
   await page.screenshot({path:path.resolve(dir,target.name+'-'+viewport.name+'-first.png'),animations:'disabled'})
   if(target.name!=='linkedin') {
     await page.screenshot({path:path.resolve(dir,target.name+'-'+viewport.name+'-full.png'),fullPage:true,animations:'disabled'})
   }
   console.log(JSON.stringify({page:row.page,viewport:row.viewport,http:row.http,finalUrl:row.finalUrl,title:row.title,restricted:row.restricted,horizontalOverflow:row.horizontalOverflow}))
  } catch(err){
   row.error=String(err?.message||err).slice(0,500)
   console.error('ERROR '+target.name+' '+viewport.name+': '+row.error)
   await page.screenshot({path:path.resolve(dir,target.name+'-'+viewport.name+'-error.png')}).catch(()=>{})
  }
  report.push(row)
  await page.close()
 }
 await context.close()
}
await browser.close()
writeFileSync(path.resolve(dir,'report.json'),JSON.stringify({at:new Date().toISOString(),pages:report},null,2))
if(report.some(x=>x.error||x.horizontalOverflow||x.http>=400))process.exitCode=1
