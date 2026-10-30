# Portafolio profesional — Maycol Melgarejo

Sitio web construido con **React 19 + Vite 8** y publicado en [Vercel](https://melgarejomaycol.vercel.app/).

El propósito del portafolio es presentar un perfil centrado en **Frontend (React, TypeScript y UI responsiva)**, proyectos verificables, contacto y las tres versiones de mi hoja de vida accesibles desde un solo modal. El inicio evita métricas decorativas y «Sobre mí» se organiza en dos columnas responsivas.

## Especialización y otros conocimientos

- **Enfoque principal:** React, TypeScript, JavaScript, HTML, CSS, UI responsiva e integración de APIs.
- **Stack de apoyo:** Node.js, Express y PostgreSQL.
- **Experiencia técnica adicional:** Prisma, APIs REST, autenticación, pruebas, Git, Vercel y Render.
- **Conocimientos complementarios:** Vue.js, PHP, Laravel, Java, Spring Boot, Flutter/Dart, MySQL, Three.js y Blender.

El nivel de experiencia varía entre herramientas. Las competencias se respaldan con proyectos y documentación, sin afirmar dominio experto de todas ellas.

## Proyectos destacados

1. **Cifrya** — plataforma Full Stack de finanzas personales de desarrollo propio con [demo pública](https://cifrya.com/demo). Código privado.
2. **Recetas TS** — aplicación React/TypeScript con [demo](https://recetas-ts.vercel.app/) y [código público y pruebas/CI](https://github.com/MelgarejoMaycol/Recetas-TS).
3. **TrackFile** — proyecto académico en equipo: desarrollé [frontend Flutter](https://github.com/MelgarejoMaycol/TRACKFILE), diseñé/documenté PostgreSQL, realicé pruebas y despliegue web/Android. Mi compañera lideró [API Spring Boot](https://github.com/MelgarejoMaycol/BackTrackfile).

La captura de Cifrya en el portafolio procede de una sesión de demostración real de octubre de 2026, sin datos personales. Los proyectos secundarios se agrupan debajo de los destacados.

## Caso de estudio técnico

Los **casos de estudio** se abren desde sus respectivas tarjetas (clic en cualquier zona libre de la tarjeta o en «Ver caso de estudio»); los enlaces externos siguen siendo independientes. Estas fichas explican decisiones de interfaz, integración y calidad de Cifrya, Recetas TS y TrackFile. [La ficha de Cifrya](docs/CIFRYA_CASO_TECNICO.md) describe el problema que resuelve,
la separación frontend/API/datos, las decisiones de ingeniería y las verificaciones CI.
La demo es pública, pero los repositorios del producto siguen privados; no se afirman
resultados de negocio ni métricas de uso sin datos verificables. La [ficha pública de TrackFile](docs/TRACKFILE_CASO_TECNICO.md) reemplaza la memoria de grado: no contiene anexos internos ni datos sensibles.

## Hojas de vida

Los tres PDF se mantienen en `public/cv/`. El botón «CV» abre un modal con vista previa y descarga; **Frontend** es la opción predeterminada:

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
- `src/data/proyectos.js`: catálogo de proyectos separado del JSX.
- `src/utils/downloadCV.js`: selección de CV.
- `public/cv/`: PDF entregables.
- `.github/workflows/deploy.yml`: validación de lint, archivos PDF, descarga de CV y build en push/PR. El despliegue del sitio depende de la integración externa de Vercel.

## Contacto

- [LinkedIn](https://www.linkedin.com/in/maycol-melgarejo-a59bb9322/)
- [GitHub](https://github.com/MelgarejoMaycol)
- [Correo](mailto:mfmelgarejo04@gmail.com)

El código histórico permanece disponible como ejercicio formativo; el enfoque profesional principal está en los tres proyectos destacados.

## Comprobar demos antes de postular

El workflow [Comprobar demos públicas](.github/workflows/public-demos.yml) revisa semanalmente y también puede ejecutarse manualmente desde **Actions → Comprobar demos públicas → Run workflow**.

Comprueba que el portafolio, Cifrya, Recetas TS y TrackFile entreguen HTML, que Recetas API responda en `/health` y que publique rutas en `/api-docs.json`. Reintenta las respuestas lentas por el arranque de servidores. No crea usuarios ni modifica datos.

También puedes ejecutar `node scripts/check-public-demos.mjs` desde un equipo con acceso a Internet.

**Alcance:** una respuesta HTTP correcta no garantiza que todas las funciones, el login o los formularios funcionen. La validación visual en móvil y el envío real de contacto siguen siendo pruebas independientes.

