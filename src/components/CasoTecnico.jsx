export default function CasoTecnico() {
  return (
    <div className="casos-estudio mb-5" aria-label="Casos de estudio de proyectos">
      <section id="caso-cifrya" aria-labelledby="caso-cifrya-titulo" className="mb-4 caso-estudio">
        <article className="p-4 p-md-5 rounded-4 text-white">
          <p className="text-primary fw-bold mb-2">Caso de estudio 01 · Producto personal</p>
          <h3 id="caso-cifrya-titulo" className="fw-bold mb-3">Cifrya: interfaces financieras comprensibles</h3>
          <p className="text-white-50 mb-4 caso-intro">
            El reto es presentar cuentas, movimientos, presupuestos y estados de manera comprensible
            en distintos dispositivos, mientras los cambios se mantienen sincronizados con una API real.
          </p>
          <div className="row g-4">
            <div className="col-md-4">
              <h4 className="h6 text-primary fw-bold">Necesidad de usuario</h4>
              <p className="text-white-50 mb-0">Consultar rápidamente el dinero disponible y registrar movimientos sin perder el contexto de la cuenta o la categoría.</p>
            </div>
            <div className="col-md-4">
              <h4 className="h6 text-primary fw-bold">Decisiones de interfaz</h4>
              <p className="text-white-50 mb-0">Componentes React reutilizables, tipado TypeScript, jerarquía visual, formularios con validación y estados de carga y error para respuestas de la API.</p>
            </div>
            <div className="col-md-4">
              <h4 className="h6 text-primary fw-bold">Implementación y calidad</h4>
              <p className="text-white-50 mb-0">Integración con Express y PostgreSQL, control de acceso en servidor, pruebas automatizadas y demo pública navegable sin registro.</p>
            </div>
          </div>
          <p className="small text-white-50 mt-4 mb-3">Proyecto de desarrollo propio. No se presentan cifras de clientes o de uso sin evidencia.</p>
          <div className="d-flex flex-wrap gap-2">
            <a href="https://cifrya.com/demo" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill px-4">Probar demo</a>
            <a href="https://github.com/MelgarejoMaycol/Portafolio/blob/main/docs/CIFRYA_CASO_TECNICO.md" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-pill px-4">Ficha técnica</a>
          </div>
        </article>
      </section>
      <section id="caso-trackfile" aria-labelledby="caso-trackfile-titulo" className="caso-estudio">
        <article className="p-4 p-md-5 rounded-4 text-white">
          <p className="text-primary fw-bold mb-2">Caso de estudio 02 · Proyecto académico de grado</p>
          <h3 id="caso-trackfile-titulo" className="fw-bold mb-3">TrackFile: organizar procesos documentales</h3>
          <p className="text-white-50 mb-4 caso-intro">
            El proyecto aborda la organización de documentos y operaciones asociadas a vehículos,
            usuarios, solicitudes, mantenimiento y alertas en una misma solución.
          </p>
          <div className="row g-4">
            <div className="col-md-4">
              <h4 className="h6 text-primary fw-bold">Problema</h4>
              <p className="text-white-50 mb-0">Dispersión de información y dificultad para consultar el estado de trámites y registros.</p>
            </div>
            <div className="col-md-4">
              <h4 className="h6 text-primary fw-bold">Experiencia e interfaz</h4>
              <p className="text-white-50 mb-0">Flujos por tarea, vistas de consulta y formularios en Flutter/Dart, priorizando navegación clara y registros entendibles.</p>
            </div>
            <div className="col-md-4">
              <h4 className="h6 text-primary fw-bold">Arquitectura</h4>
              <p className="text-white-50 mb-0">Cliente Flutter conectado a una API Spring Boot con persistencia PostgreSQL. Alcance académico, sin atribuir cifras de operación empresarial.</p>
            </div>
          </div>
          <p className="small text-white-50 mt-4 mb-3">
            La memoria de grado y los anexos internos no se publican. Esta ficha explica la solución sin datos identificables de terceros.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <a href="https://trackfile.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill px-4">Ver aplicación</a>
            <a href="https://github.com/MelgarejoMaycol/Portafolio/blob/main/docs/TRACKFILE_CASO_TECNICO.md" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-pill px-4">Leer ficha técnica</a>
          </div>
        </article>
      </section>
    </div>
  )
}
