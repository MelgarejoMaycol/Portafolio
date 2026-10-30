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
    descripcion: 'Plataforma financiera que desarrollo de extremo a extremo. Interfaces React/TypeScript por funcionalidades, formularios validados, integración REST y gestión de datos. Demo pública sin registro.',
    imagen: imagenCifrya,
    imagenContain: false,
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    linkPagina: 'https://cifrya.com/',
    linkDemo: 'https://cifrya.com/demo',
    linkCaseStudy: '#caso-cifrya',
    etiqueta: 'Proyecto personal · Frontend y backend'
  },
  {
    id: 'recetas-ts',
    titulo: 'Recetas TS — React y TypeScript',
    descripcion: 'Aplicación de recetas con consulta de API, búsqueda, rutas y presentación de contenido. Código público con pruebas de lógica de interfaz y verificación automática mediante GitHub Actions.',
    imagen: RecetasFrontTS,
    imagenContain: true,
    stack: ['React', 'TypeScript', 'Vite', 'GitHub Actions'],
    linkPagina: 'https://recetas-ts.vercel.app/',
    linkDemo: 'https://recetas-ts.vercel.app/',
    linkDetalles: 'https://github.com/MelgarejoMaycol/Recetas-TS',
    linkCaseStudy: '#caso-recetas-ts',
    etiqueta: 'Proyecto personal · Código público'
  },
  {
    id: 'trackfile',
    titulo: 'TrackFile — Gestión Documental',
    descripcion: 'Proyecto de grado en equipo. Diseñé y documenté PostgreSQL, desarrollé el frontend Flutter/Dart, realicé pruebas y preparé la versión web y APK; el backend fue liderado por mi compañera.',
    imagen: proyectoTrackFile,
    imagenContain: true,
    stack: ['Flutter', 'Dart', 'PostgreSQL', 'REST'],
    linkPagina: 'https://trackfile.vercel.app/',
    linkCaseStudy: '#caso-trackfile',
    linkDetalles: 'https://github.com/MelgarejoMaycol/TRACKFILE',
    detalleLabel: 'Código frontend',
    etiqueta: 'Proyecto de grado · En equipo'
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

  ]
