# Portafolio profesional — Maycol Melgarejo

Sitio web construido con **React 19 + Vite 8** y publicado en [Vercel](https://melgarejomaycol.vercel.app/).

El propósito del portafolio es presentar proyectos verificables, competencias técnicas, contacto y versiones descargables de mi hoja de vida.

## Especialización y otros conocimientos

- **Stack principal:** React, TypeScript, JavaScript, Node.js, Express y PostgreSQL.
- **Experiencia técnica adicional:** Prisma, APIs REST, autenticación, pruebas, Git, Vercel y Render.
- **Conocimientos complementarios:** Vue.js, PHP, Laravel, Java, Spring Boot, Flutter/Dart, MySQL, Three.js y Blender.

El nivel de experiencia varía entre herramientas. Las competencias se respaldan con proyectos y documentación, sin afirmar dominio experto de todas ellas.

## Proyectos destacados

1. **Cifrya** — plataforma Full Stack de finanzas personales con [demo pública](https://cifrya.com/demo). Código del producto en repositorios privados.
2. **TrackFile** — proyecto académico de gestión documental con [frontend Flutter](https://github.com/MelgarejoMaycol/TRACKFILE) y [API Spring Boot](https://github.com/MelgarejoMaycol/BackTrackfile).

Otros proyectos formativos están disponibles en una sección secundaria del portafolio.

## Caso de estudio técnico

La sección **«Caso de estudio · Cifrya»** del portafolio describe el problema que resuelve,
la separación frontend/API/datos, las decisiones de ingeniería y las verificaciones CI.
La demo es pública, pero los repositorios del producto siguen privados; no se afirman
resultados de negocio ni métricas de uso sin datos verificables.

## Hojas de vida

Los tres PDF se mantienen en `public/cv/` y se descargan desde las secciones «Sobre mí» y «Contacto»:

- [Full Stack](public/cv/CV_Maycol_Melgarejo_Full_Stack.pdf)
- [Frontend](public/cv/CV_Maycol_Melgarejo_Frontend.pdf)
- [Backend](public/cv/CV_Maycol_Melgarejo_Backend.pdf)

Los PDF se generan a partir de sus respectivas versiones editables de Google Docs para mantener una fuente editable y una exportación idéntica. Cuando cambie Google Docs, hay que volver a exportar y sustituir los PDF en este repositorio.

## Instalación y verificación

```bash
git clone https://github.com/MelgarejoMaycol/Portafolio.git
cd Portafolio
npm ci
npm run lint
npm test
npm run build
npm run dev
```

- `src/components/`: secciones del portafolio.
- `src/utils/downloadCV.js`: selección de CV.
- `public/cv/`: PDF entregables.
- `.github/workflows/deploy.yml`: validación de lint, archivos PDF, descarga de CV y build en push/PR. El despliegue del sitio depende de la integración externa de Vercel.

## Contacto

- [LinkedIn](https://www.linkedin.com/in/maycol-melgarejo-a59bb9322/)
- [GitHub](https://github.com/MelgarejoMaycol)
- [Correo](mailto:mfmelgarejo04@gmail.com)

El código histórico permanece disponible como ejercicio formativo; el enfoque profesional principal está en los dos proyectos destacados.
