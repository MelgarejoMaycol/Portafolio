import proyectoToDo from '../../public/Proyecto TO_DO.png'
import proyectoTaxis from '../../public/ProyectoTaxis.png'
import proyectoCompu from '../../public/ProyectoCompu3D.png'
import proyectoTrackFile from '../../public/ProyectoTrackFile.png'
import ProyectoSeries from '../../public/ProyectoSeries.png'
import ProyectoPokeVerso from '../../public/ProyectoPokeVerso.png'
import RecetasFrontTS from '../../public/ProyectoRecetas_Front_TS.png'

const imagenCifrya = '/cifrya-dashboard.webp'

export const proyectosPrincipales = [
  {
    id: 'cifrya',
    titulo: 'Cifrya — Finanzas Personales',
    descripcion: 'Finanzas personales con cuentas, movimientos y presupuestos.',
    categorias: ['frontend', 'backend', 'fullstack'],
    imagen: imagenCifrya,
    imagenContain: false,
    stack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    linkPagina: 'https://cifrya.com/',
    linkDemo: 'https://cifrya.com/demo',
    linkCaseStudy: '#caso-cifrya',
    etiqueta: 'Full Stack · Proyecto personal'
  },
  {
    id: 'recetas-ts',
    titulo: 'Recetas TS — React y TypeScript',
    descripcion: 'Buscador de recetas con integración de API y pruebas automatizadas.',
    categorias: ['frontend'],
    imagen: RecetasFrontTS,
    imagenContain: true,
    stack: ['React', 'TypeScript', 'Vite', 'GitHub Actions'],
    linkPagina: 'https://recetas-ts.vercel.app/',
    linkDemo: 'https://recetas-ts.vercel.app/',
    linkDetalles: 'https://github.com/MelgarejoMaycol/Recetas-TS',
    linkCodigo: 'https://github.com/MelgarejoMaycol/Recetas-TS',
    linkCaseStudy: '#caso-recetas-ts',
    etiqueta: 'Frontend · Código público'
  },
  {
    id: 'trackfile',
    titulo: 'TrackFile — Gestión Documental',
    descripcion: 'Gestión documental para transporte, desarrollada en equipo.',
    categorias: ['frontend', 'fullstack'],
    imagen: proyectoTrackFile,
    imagenContain: true,
    stack: ['Flutter', 'Dart', 'PostgreSQL', 'REST'],
    linkPagina: 'https://trackfile.vercel.app/',
    linkCaseStudy: '#caso-trackfile',
    linkDetalles: 'https://github.com/MelgarejoMaycol/Portafolio/blob/main/docs/TRACKFILE_CASO_TECNICO.md',
    linkCodigo: 'https://github.com/MelgarejoMaycol/TRACKFILE',
    detalleLabel: 'Ficha técnica',
    etiqueta: 'Frontend · En equipo'
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


  ]
