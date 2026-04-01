# 🚀 Portafolio - Maycol Melgarejo

Un portafolio web moderno, responsivo y completamente funcional construido con React y Vite. Diseñado para mostrar proyectos, habilidades técnicas y facilitar el contacto directo.

🌐 **[Ver en Vivo](https://melgarejomaycol.vercel.app/)** | [![GitHub Actions](https://github.com/maycolmelgarejo/Portafolio/actions/workflows/deploy.yml/badge.svg)](https://github.com/maycolmelgarejo/Portafolio/actions)

## 📋 Características

- ✅ **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y escritorio
- ✅ **Navegación Suave**: Transiciones suave con detección automática de sección activa
- ✅ **Formulario de Contacto**: Integración con EmailJS para enviar mensajes directamente
- ✅ **Descarga de Documentos**: CV y Certificados disponibles en múltiples ubicaciones
- ✅ **Galería de Proyectos**: Showcase de 5 proyectos destacados con descripciones
- ✅ **Stack Técnico**: Visualización interactiva de tecnologías con logos oficiales
- ✅ **Deploy Automático**: CI/CD con GitHub Actions + Vercel
- ✅ **Rendimiento Optimizado**: Build optimizado con Vite

## 🛠️ Tecnologías

### Frontend
- **React** 19.2.4 - Librería UI
- **Vite** 8.0.1 - Build tool
- **Bootstrap** 5.3.0 - Framework CSS
- **Font Awesome** 6.4.0 - Iconos
- **DevIcons CDN** - Logos de tecnologías

### Backend & Servicios
- **EmailJS** 4.x - Servicio de email
- **Vercel** - Hosting y deploy automático

### Herramientas de Desarrollo
- ESLint - Linting
- Vite + React Hot Module Replacement
- GitHub Actions - CI/CD

## 📁 Estructura del Proyecto

```
Portafolio/
├── src/
│   ├── components/
│   │   ├── Encabezado.jsx      # Navbar sticky con navegación
│   │   ├── Inicio.jsx           # Hero section con CTA
│   │   ├── SobreMi.jsx          # About section
│   │   ├── Proyectos.jsx        # Portfolio projects
│   │   ├── Herramientas.jsx     # Tech stack showcase
│   │   └── Contacto.jsx         # Contact form + info
│   ├── index.css                # Estilos principales
│   ├── main.jsx                 # Entry point
│   └── assets/
│       ├── CV_MaycolMelgarejo.pdf
│       ├── Certificados.pdf
│       └── images/
├── public/
│   ├── avatar.jpg
│   └── project-screenshots/
├── .github/workflows/
│   └── deploy.yml               # GitHub Actions workflow
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## 🚀 Inicio Rápido

### Requisitos
- Node.js 20+
- npm o yarn

### Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/maycolmelgarejo/Portafolio.git
cd Portafolio
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Variables de Entorno**
El proyecto usa EmailJS con configuración ya integrada. Si necesitas cambiar las credenciales, edita [Contacto.jsx](src/components/Contacto.jsx)

### Desarrollo

```bash
npm run dev
```
Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Build para Producción

```bash
npm run build
```

### Preview del Build

```bash
npm run preview
```

## 📧 Configuración de EmailJS

El formulario de contacto usa EmailJS. Credenciales configuradas:
- **Public Key**: IBUFbLoplqw1J31Bs
- **Service ID**: service_rgn3xdh
- **Template ID**: template_o9w6xkz

Para cambiar las credenciales, edita `src/components/Contacto.jsx`

## 🎨 Diseño Responsivo

El portafolio incluye 6 breakpoints de Bootstrap:
- 📱 320px+ (Mobile)
- 📱 576px+ (Small devices)
- 📱 640px+ (Tablets)
- 💻 768px+ (Large tablets)
- 💻 992px+ (Desktops)
- 🖥️ 1200px+ (Large desktops)

## 🔄 CI/CD con GitHub Actions

El proyecto incluye automatización:
1. **Build automático** al hacer push a `main`
2. **Deploy automático** a GitHub Pages
3. **Validación** con ESLint

Ver workflow: [.github/workflows/deploy.yml](.github/workflows/deploy.yml)

## 📱 Secciones

### 🏠 Inicio
- Hero section con imagen blob animada
- Botones CTA: "Ver Proyectos" y "Contáctame"
- Responsive column reordering

### 👤 Sobre Mí
- Información personal
- Redes sociales
- Botón de descarga de CV

### 🎯 Proyectos
**5 proyectos destacados:**
- **To Do** - Gestor de tareas (Completo)
- **Taxis** - Sistema de taxis (Completo)
- **Netflix Series** - Catálogo de series (En desarrollo)
- **COMPU3D** - Tienda de hardware (Completo)
- **TRACKEILE** - Seguimiento de rutas (Completo)

### 🛠️ Herramientas
**12 tecnologías:**
React, Laravel, PHP, Java, JavaScript, HTML5, CSS3, Bootstrap, Git, MySQL, PostgreSQL, Spring Boot

Cada logo:
- Responsive (40px → 70px)
- Hover effect con scale
- Click abre sitio oficial en nueva pestaña

### 📬 Contacto
- Formulario funcional con EmailJS
- Información de contacto
- Enlaces a redes sociales
- Descargas de CV y Certificados

## 🎯 Características Técnicas

### Navegación Inteligente
- Detección automática de sección activa
- Highlight dinámico del navbar
- Smooth scroll con offsets adaptativos
- Menu móvil auto-cierre

### Offsets de Scroll
- Móvil (< 992px): -120px
- Desktop (≥ 992px): -40px

### Limpieza de Console
Filtros automáticos para eliminar:
- "Tracking Prevention" warnings
- React DevTools messages
- Mensajes innecesarios en desarrollo

## 📞 Contacto

- **Email**: mfmelgarejo04@gmail.com
- **GitHub**: [@MelgarejoMaycol](https://github.com/MelgarejoMaycol)
- **Instagram**: [@melgarejo_mayc](https://instagram.com/melgarejo_mayc)
- **WhatsApp**: [Contactar](https://wa.me/573143832271)

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver archivo LICENSE para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios mayores, abre un issue primero para discutir qué cambios te gustaría hacer.

---

**Hecho con ❤️ por Maycol Melgarejo**