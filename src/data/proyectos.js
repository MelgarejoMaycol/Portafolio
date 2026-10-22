import proyectoToDo from '../../public/Proyecto TO_DO.png'
import proyectoTaxis from '../../public/ProyectoTaxis.png'
import proyectoCompu from '../../public/ProyectoCompu3D.png'
import proyectoTrackFile from '../../public/ProyectoTrackFile.png'
import ProyectoSeries from '../../public/ProyectoSeries.png'
import ProyectoPokeVerso from '../../public/ProyectoPokeVerso.png'
import ProyectoRecetas_Api from '../../public/ProyectoRecetas_Api.png'
import RecetasFrontTS from '../../public/ProyectoRecetas_Front_TS.png'

const imagenCifrya = '/cifrya-dashboard.webp'

export const proyectosPrincipales = [
    {
      id: 'cifrya',
      titulo: 'Cifrya — Finanzas Personales',
      descripcion:
        'Aplicación de finanzas personales con paneles, formularios y flujos de cuentas, movimientos y presupuestos. Construí interfaces en React y TypeScript conectadas con una API real, estados de carga y una demo pública navegable.',
      imagen: imagenCifrya,
      imagenContain: false,
      stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
      linkPagina: 'https://cifrya.com/',
      linkDemo: 'https://cifrya.com/demo',
      linkCaseStudy: '#caso-cifrya',
      etiqueta: 'Proyecto personal · React/TypeScript'
    },
    {
      id: 'trackfile',
      titulo: 'TrackFile — Gestión Documental',
      descripcion:
        'Proyecto de grado de gestión documental para transporte. Incluye flujos para archivos, usuarios, vehículos, solicitudes, mantenimiento y alertas; interfaz Flutter conectada con servicios Spring Boot y PostgreSQL.',
      imagen: proyectoTrackFile,
      imagenContain: true,
      stack: ['Flutter', 'Dart', 'Java', 'Spring Boot', 'PostgreSQL'],
      linkPagina: 'https://trackfile.vercel.app/',
      linkCaseStudy: '#caso-trackfile',
      linkDetalles: 'https://github.com/MelgarejoMaycol/Portafolio/blob/main/docs/TRACKFILE_CASO_TECNICO.md',
      detalleLabel: 'Ficha técnica',
      etiqueta: 'Proyecto principal · Proyecto de grado'
    }
  ]

export const otrosProyectos = [
    {
      id: 1,
      titulo: 'Sistema To Do',
      descripcion:
        'Sistema completo de gestión de tareas con backend Django REST Framework y frontend React, incluyendo CI/CD con pruebas automáticas.',
      imagen: proyectoToDo,
      linkDetalles: 'https://github.com/MelgarejoMaycol/SISTEMA_TO_DO-1',
      linkPagina: 'https://to-do-topaz-sigma.vercel.app/'
    },
    {
      id: 2,
      titulo: 'Empresa Taxis',
      descripcion:
        'Página web desarrollada como proyecto universitario para una empresa de transporte en Bucaramanga, Santander.',
      imagen: proyectoTaxis,
      linkDetalles: 'https://github.com/MelgarejoMaycol/Empresa_Taxis',
      linkPagina: 'https://empresa-taxis.vercel.app/'
    },
    {
      id: 3,
      titulo: 'Series de Netflix',
      descripcion:
        'Proyecto inicial de HTML y CSS enfocado en estructura semántica, estilos y presentación de información sobre series de Netflix.',
      imagen: ProyectoSeries,
      linkDetalles: 'https://github.com/MelgarejoMaycol/Series-de-Netflix',
      linkPagina: 'https://melgarejomaycol.github.io/Series-de-Netflix/'
    },
    {
      id: 4,
      titulo: 'COMPU3D',
      descripcion:
        'Aplicación web interactiva que simula una tienda especializada en componentes de computadora e integra experiencias visuales 3D.',
      imagen: proyectoCompu,
      linkDetalles: 'https://github.com/MelgarejoMaycol/Objetos_Web',
      linkPagina: 'https://tiendaobjetos.vercel.app/'
    },
    {
      id: 6,
      titulo: 'PokeVerso',
      descripcion:
        'Aplicación desarrollada con React y Vite que consume la PokeAPI para consultar Pokémon, realizar búsquedas y gestionar favoritos.',
      imagen: ProyectoPokeVerso,
      linkDetalles: 'https://github.com/MelgarejoMaycol/PokeVerso',
      linkPagina: 'https://poke-verso.vercel.app/'
    },
    {
      id: 7,
      titulo: 'Recetas-Api',
      descripcion:
        'API REST para gestionar recetas, usuarios, categorías, ingredientes, preparaciones, comentarios y favoritos.',
      imagen: ProyectoRecetas_Api,
      linkDetalles: 'https://github.com/MelgarejoMaycol/recetas-api',
      linkPagina: 'https://recetas-api-j4p8.onrender.com/'
    },
    {
      id: 8,
      titulo: 'Recetas-Front-TS',
      descripcion:
        'Frontend de la aplicación de recetas desarrollado con React y TypeScript, integrado con una API REST para gestionar recetas, usuarios y favoritos.',
      imagen: RecetasFrontTS,
      linkDetalles: 'https://github.com/MelgarejoMaycol/Recetas-TS',
      linkPagina: 'https://recetas-ts.vercel.app/'
    }
  ]
