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
        'Finanzas personales con cuentas, movimientos y presupuestos en una interfaz clara.',
      descripcionDetallada: 'Aplicación de finanzas personales con paneles, formularios y flujos de cuentas, movimientos y presupuestos. Construí interfaces en React y TypeScript conectadas con una API real, estados de carga y una demo pública navegable.',
      imagen: imagenCifrya,
      imagenContain: false,
      stack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma'],
      linkPagina: 'https://cifrya.com/',
      linkDemo: 'https://cifrya.com/demo',
      linkCaseStudy: '#caso-cifrya',
      etiqueta: 'Aplicación web · Full Stack'
    },
    {
      id: 'trackfile',
      titulo: 'TrackFile — Gestión Documental',
      descripcion:
        'Gestión documental y seguimiento de procesos para el sector transporte.',
      descripcionDetallada: 'Proyecto de grado de gestión documental para transporte. Incluye flujos para archivos, usuarios, vehículos, solicitudes, mantenimiento y alertas; interfaz Flutter conectada con servicios Spring Boot y PostgreSQL.',
      imagen: proyectoTrackFile,
      imagenContain: true,
      stack: ['Flutter', 'Dart', 'Java', 'Spring Boot', 'PostgreSQL'],
      linkPagina: 'https://trackfile.vercel.app/',
      linkCaseStudy: '#caso-trackfile',
      linkDetalles: 'https://github.com/MelgarejoMaycol/Portafolio/blob/main/docs/TRACKFILE_CASO_TECNICO.md',
      detalleLabel: 'Ficha técnica',
      etiqueta: 'Proyecto de grado · Flutter'
    }
  ]

export const otrosProyectos = [
    {
      id: 1,
      titulo: 'Sistema To Do',
      descripcion:
        'Gestor de tareas con React, Django REST y pruebas automáticas.',
      imagen: proyectoToDo,
      linkDetalles: 'https://github.com/MelgarejoMaycol/SISTEMA_TO_DO-1',
      linkPagina: 'https://to-do-topaz-sigma.vercel.app/'
    },
    {
      id: 2,
      titulo: 'Empresa Taxis',
      descripcion:
        'Sitio universitario para una empresa de transporte.',
      imagen: proyectoTaxis,
      linkDetalles: 'https://github.com/MelgarejoMaycol/Empresa_Taxis',
      linkPagina: 'https://empresa-taxis.vercel.app/'
    },
    {
      id: 3,
      titulo: 'Series de Netflix',
      descripcion:
        'Sitio de series construido con HTML y CSS.',
      imagen: ProyectoSeries,
      linkDetalles: 'https://github.com/MelgarejoMaycol/Series-de-Netflix',
      linkPagina: 'https://melgarejomaycol.github.io/Series-de-Netflix/'
    },
    {
      id: 4,
      titulo: 'COMPU3D',
      descripcion:
        'Tienda de componentes con experiencias visuales 3D.',
      imagen: proyectoCompu,
      linkDetalles: 'https://github.com/MelgarejoMaycol/Objetos_Web',
      linkPagina: 'https://tiendaobjetos.vercel.app/'
    },
    {
      id: 6,
      titulo: 'PokeVerso',
      descripcion:
        'Explorador de Pokémon con búsquedas y favoritos.',
      imagen: ProyectoPokeVerso,
      linkDetalles: 'https://github.com/MelgarejoMaycol/PokeVerso',
      linkPagina: 'https://poke-verso.vercel.app/'
    },
    {
      id: 7,
      titulo: 'Recetas-Api',
      descripcion:
        'API REST para gestionar recetas y usuarios.',
      imagen: ProyectoRecetas_Api,
      linkDetalles: 'https://github.com/MelgarejoMaycol/recetas-api',
      linkPagina: 'https://recetas-api-j4p8.onrender.com/'
    },
    {
      id: 8,
      titulo: 'Recetas-Front-TS',
      descripcion:
        'Frontend de recetas con React, TypeScript y API REST.',
      imagen: RecetasFrontTS,
      linkDetalles: 'https://github.com/MelgarejoMaycol/Recetas-TS',
      linkPagina: 'https://recetas-ts.vercel.app/'
    }
  ]
