import proyectoToDo from '../../public/Proyecto TO_DO.png'
import proyectoTaxis from '../../public/ProyectoTaxis.png'
import proyectoCompu from '../../public/ProyectoCompu3D.png'
import proyectoTrackFile from '../../public/ProyectoTrackFile.png'
import ProyectoSeries from '../../public/ProyectoSeries.png'
import ProyectoPokeVerso from '../../public/ProyectoPokeVerso.png'
import documentoTrackFile from '../assets/F-DC-125  desarrollo tecnológico listo.pdf'
import ProyectoRecetas_Api from '../../public/ProyectoRecetas_Api.png'
import RecetasFrontTS from '../../public/ProyectoRecetas_Front_TS.png'

const imagenCifrya = '/cifrya-dashboard.webp'

export const proyectosPrincipales = [
    {
      id: 'cifrya',
      titulo: 'Cifrya — Finanzas Personales',
      descripcion:
        'Plataforma Full Stack de finanzas personales para centralizar cuentas, movimientos, presupuestos, metas, créditos, pagos recurrentes e inversiones. Incluye conversor de divisas, simulaciones, proyecciones, salud financiera y una demo pública para conocer el producto sin registrarse.',
      imagen: imagenCifrya,
      imagenContain: false,
      stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
      linkPagina: 'https://cifrya.com/',
      linkDemo: 'https://cifrya.com/demo',
      linkCaseStudy: '#caso-cifrya',
      etiqueta: 'Proyecto principal · Full Stack'
    },
    {
      id: 'trackfile',
      titulo: 'TrackFile — Gestión Documental',
      descripcion:
        'Plataforma para gestión documental y operación de empresas de transporte: archivos, usuarios, vehículos, solicitudes, mantenimiento y alertas. Proyecto de grado con cliente Flutter y API Spring Boot / PostgreSQL.',
      imagen: proyectoTrackFile,
      imagenContain: true,
      stack: ['Flutter', 'Dart', 'Java', 'Spring Boot', 'PostgreSQL'],
      linkPagina: 'https://trackfile.vercel.app/',
      linkDetalles: documentoTrackFile,
      detalleLabel: 'Documento',
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
