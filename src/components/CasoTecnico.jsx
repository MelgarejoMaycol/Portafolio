export default function CasoTecnico() {
  return (
    <section id="caso-cifrya" className="mb-5" aria-labelledby="caso-cifrya-titulo" style={{ scrollMarginTop: '6rem' }}>
      <article className="p-4 p-md-5 rounded-4 text-white" style={{ background: 'linear-gradient(145deg, #0b1c30, #092a32)', border: '1px solid rgba(103,232,207,.3)' }}>
        <p className="text-primary fw-bold mb-2">Caso de estudio · Proyecto personal en desarrollo</p>
        <h3 id="caso-cifrya-titulo" className="fw-bold mb-3">Cifrya: una aplicación financiera más allá de la interfaz</h3>
        <p className="text-white-50 mb-4" style={{ maxWidth: '860px', lineHeight: 1.75 }}>
          El reto consistió en integrar cuentas, movimientos, presupuestos, metas y obligaciones
          en una experiencia comprensible, manteniendo coherencia entre las reglas financieras,
          las operaciones de la API y los datos presentados en React.
        </p>
        <div className="row g-4">
          <div className="col-md-4">
            <h4 className="h6 text-primary fw-bold">Arquitectura</h4>
            <p className="text-white-50 mb-0">Frontend con React, TypeScript y Vite; API REST con Node.js y Express; persistencia con PostgreSQL y Prisma. Interfaces y servicios separados por responsabilidades.</p>
          </div>
          <div className="col-md-4">
            <h4 className="h6 text-primary fw-bold">Decisiones técnicas</h4>
            <p className="text-white-50 mb-0">Autenticación, validación de entradas, gestión de estados asíncronos y reglas de negocio para movimientos y compromisos. Datos de demostración separados del uso personal.</p>
          </div>
          <div className="col-md-4">
            <h4 className="h6 text-primary fw-bold">Cómo verifico el trabajo</h4>
            <p className="text-white-50 mb-0">CI privado con lint, comprobación de tipos, pruebas unitarias, integración con PostgreSQL, recorridos E2E con Playwright y pruebas de disponibilidad de la API desplegada.</p>
          </div>
        </div>
        <p className="mt-4 mb-3 small text-white-50">
          La demostración es pública; el código fuente continúa privado mientras evoluciona el producto.
          No se presentan métricas de usuarios ni resultados comerciales no verificados.
        </p>
        <div className="d-flex flex-wrap gap-2">
          <a href="https://cifrya.com/demo" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill px-4">Explorar la demo</a>
          <a href="https://cifrya.com/" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-pill px-4">Ver producto</a>
        </div>
      </article>
    </section>
  )
}
