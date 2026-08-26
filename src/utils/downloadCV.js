const WIN_ANSI = new Map([
  ['á', 225], ['é', 233], ['í', 237], ['ó', 243], ['ú', 250], ['ü', 252], ['ñ', 241],
  ['Á', 193], ['É', 201], ['Í', 205], ['Ó', 211], ['Ú', 218], ['Ü', 220], ['Ñ', 209],
  ['¿', 191], ['¡', 161], ['·', 183], ['—', 151], ['–', 150], ['•', 149], ['’', 146]
])

function pdfEscape(value) {
  let out = ''

  for (const char of value) {
    if (char === '\\' || char === '(' || char === ')') {
      out += `\\${char}`
      continue
    }

    const mapped = WIN_ANSI.get(char)
    if (mapped !== undefined) {
      out += `\\${mapped.toString(8).padStart(3, '0')}`
      continue
    }

    const code = char.charCodeAt(0)
    out += code >= 32 && code <= 126 ? char : '?'
  }

  return out
}

const byteLength = (value) => new TextEncoder().encode(value).length

function makeCVPdf() {
  const commands = []
  const dark = '0.035 0.102 0.145'
  const accent = '0.082 0.294 0.271'
  const muted = '0.29 0.34 0.38'
  const text = '0.08 0.10 0.12'

  const drawText = (value, x, y, size = 8, font = 'F1', color = text) => {
    commands.push(`${color} rg BT /${font} ${size} Tf 1 0 0 1 ${x} ${y} Tm (${pdfEscape(value)}) Tj ET`)
  }

  const line = (x1, y1, x2, y2, width = 0.7, color = '0.82 0.85 0.87') => {
    commands.push(`${color} RG ${width} w ${x1} ${y1} m ${x2} ${y2} l S`)
  }

  const rect = (x, y, width, height, color) => {
    commands.push(`${color} rg ${x} ${y} ${width} ${height} re f`)
  }

  rect(0, 720, 612, 72, dark)
  drawText('MAYCOL MELGAREJO', 34, 764, 18.5, 'F2', '1 1 1')
  drawText('DESARROLLADOR FRONT-END | REACT · TYPESCRIPT · VUE.JS', 34, 746, 9.6, 'F2', '0.78 0.93 0.90')
  drawText('Full Stack con enfoque en interfaces responsivas, APIs REST y productos digitales', 34, 733, 7.8, 'F1', '0.91 0.94 0.95')
  drawText('Bucaramanga, Colombia | +57 314 383 2271 | mfmelgarejo04@gmail.com', 34, 711, 7.4, 'F1', muted)
  drawText('Portafolio: melgarejomaycol.vercel.app | GitHub: github.com/MelgarejoMaycol | LinkedIn: linkedin.com/in/maycol-melgarejo-a59bb9322', 34, 700, 6.9, 'F1', muted)

  let y = 678

  const heading = (title) => {
    drawText(title, 34, y, 8.8, 'F2', accent)
    line(34, y - 4, 578, y - 4, 0.7, '0.75 0.82 0.82')
    y -= 16
  }

  const body = (value, options = {}) => {
    drawText(
      value,
      options.x ?? 34,
      y,
      options.size ?? 7.35,
      options.bold ? 'F2' : 'F1',
      options.color ?? text
    )
    y -= options.gap ?? 9.2
  }

  const spacer = (amount = 4) => {
    y -= amount
  }

  heading('PERFIL PROFESIONAL')
  body('Desarrollador Front-End / Full Stack con experiencia práctica continua desde 2022 construyendo aplicaciones web y móviles en proyectos')
  body('de grado, académicos e independientes. Trabajo principalmente con React, TypeScript y JavaScript, y cuento con conocimientos en')
  body('Vue.js. Convierto requerimientos y diseños de interfaz en componentes reutilizables, responsivos y conectados a servicios REST. Tengo')
  body('experiencia integrando autenticación JWT, lógica de negocio y bases de datos, con enfoque en mantenibilidad, calidad visual y resolución')
  body('de problemas.')
  spacer(3)

  heading('COMPETENCIAS ALINEADAS AL ROL')
  body('Frontend: React, TypeScript, JavaScript, Vue.js (conocimientos), HTML5, CSS3, Bootstrap, Three.js', { bold: true })
  body('UI y arquitectura Front-End: diseño responsivo / mobile-first, componentes reutilizables, integración de diseños UX/UI y manejo de estado')
  body('Integración: APIs REST, JWT, consumo de servicios, validaciones, manejo de errores y flujos de interfaz')
  body('Backend y datos: Node.js, Express, PostgreSQL, Prisma, MySQL, PHP, Laravel, Java, Spring Boot')
  body('Herramientas: Git, GitHub, Postman, Vite, VS Code, Vercel, Render, Neon')
  spacer(3)

  heading('EXPERIENCIA EN DESARROLLO DE SOFTWARE | 2022 – ACTUALIDAD')
  body('Desarrollo de aplicaciones web y móviles participando en frontend, integración de APIs, autenticación, modelado de datos y despliegue.')
  body('Experiencia orientada a productos de gestión, finanzas, comercio digital y visualización interactiva, aplicando buenas prácticas de')
  body('reutilización, mantenibilidad y experiencia de usuario.')
  spacer(3)

  heading('PROYECTOS DESTACADOS')
  body('Fynar — Plataforma de finanzas personales | React · TypeScript · Node.js · Express · PostgreSQL · Prisma | 2026 – Actualidad', { bold: true, size: 7.15 })
  body('• Construí interfaces responsivas para cuentas, tarjetas de crédito, movimientos y presupuestos, priorizando claridad visual y experiencia de usuario.')
  body('• Integré frontend con API REST, autenticación, validación y manejo de datos; desplegué frontend, backend y base de datos en Vercel, Render y Neon.')
  spacer(1)
  body('TrackFile — Sistema de gestión documental | Proyecto de grado · Full Stack | 2025-08 – 2026-04', { bold: true, size: 7.15 })
  body('• Desarrollé una aplicación para gestionar, consultar y dar seguimiento a archivos y documentos mediante una interfaz responsiva.')
  body('• Implementé registro de usuarios, administración de archivos e integración frontend-backend-base de datos, además de análisis de requerimientos.')
  spacer(1)
  body('E-commerce de hardware con experiencia 3D | Frontend | 2024-08 – 2024-09', { bold: true, size: 7.15 })
  body('• Desarrollé en equipo un catálogo responsivo con JavaScript, HTML, CSS y Bootstrap; integré gráficos 3D con Three.js y Blender.')
  spacer(3)

  heading('EDUCACIÓN')
  body('Tecnología en Desarrollo de Sistemas Informáticos — Unidades Tecnológicas de Santander, Bucaramanga | 2022 – 2026', { bold: true, size: 7.15 })
  body('Tecnólogo en espera de ceremonia de grado · Septiembre de 2026')
  spacer(3)

  heading('CERTIFICACIONES RELEVANTES')
  body('Desarrollo con Node.js: Aplicación, Testing y Seguridad — Udemy (2026) · Java Programming — Oracle Academy (2024)', { size: 7.1 })
  body('Desarrollador Front-end — Capacítate para el empleo (2024) · Flutter y Dart — Udemy (2026)', { size: 7.1 })
  spacer(3)

  heading('EXPERIENCIA LABORAL ADICIONAL')
  body('Experiencia en atención al cliente, ventas y operación entre 2021 y 2025, fortaleciendo comunicación, responsabilidad, organización,', { size: 7.1 })
  body('trabajo en equipo y desempeño bajo presión.', { size: 7.1 })

  const stream = `${commands.join('\n')}\n`
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>',
    `<< /Length ${byteLength(stream)} >>\nstream\n${stream}endstream`
  ]

  let pdf = '%PDF-1.4\n% Fynar Portfolio CV\n'
  const offsets = [0]

  objects.forEach((object, index) => {
    offsets.push(byteLength(pdf))
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`
  })

  const xrefOffset = byteLength(pdf)
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`

  for (let index = 1; index <= objects.length; index += 1) {
    pdf += `${String(offsets[index]).padStart(10, '0')} 00000 n \n`
  }

  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`
  return pdf
}

export function downloadCV() {
  const pdf = makeCVPdf()
  const blob = new Blob([new TextEncoder().encode(pdf)], { type: 'application/pdf' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')

  link.href = url
  link.download = 'CV_MaycolMelgarejo.pdf'
  document.body.appendChild(link)
  link.click()
  link.remove()

  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
