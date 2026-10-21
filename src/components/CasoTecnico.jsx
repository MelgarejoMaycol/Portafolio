export default function CasoTecnico() {
  return (
    <section id="caso-cifrya" className="mb-5" aria-labelledby="caso-cifrya-titulo" style={{ scrollMarginTop: '6rem' }}>
      <article className="p-4 p-md-5 rounded-4 text-white" style={{ background: 'linear-gradient(145deg, #0b1c30, #092a32)', border: '1px solid rgba(103,232,207,.3)' }}>
        <p className="text-primary fw-bold mb-2">Caso de estudio · Proyecto personal</p>
        <h3 id="caso-cifrya-titulo" className="fw-bold mb-3">Cifrya: proteger la consistencia de las finanzas</h3>
        <p className="text-white-50 mb-4" style={{ maxWidth: '860px', lineHeight: 1.75 }}>
          El reto no es solamente listar gastos: una transferencia afecta dos cuentas y los datos
          pertenecen a un espacio de trabajo concreto. Las reglas críticas deben ejecutarse en el servidor,
          sin depender de cálculos aislados en cada pantalla de React.
        </p>
        <div className="row g-4">
          <div className="col-md-4">
            <h4 className="h6 text-primary fw-bold">Problema y decisión</h4>
            <p className="text-white-50 mb-0">
              Para evitar saldos parciales, el backend concentra las operaciones financieras relacionadas
              en transacciones de PostgreSQL, con montos decimales y separación de datos por workspace.
            </p>
          </div>
          <div className="col-md-4">
            <h4 className="h6 text-primary fw-bold">Arquitectura</h4>
            <p className="text-white-50 mb-0">
              React y TypeScript consumen una API REST de Express. Las validaciones, autenticación,
              servicios de dominio y acceso a Prisma/PostgreSQL quedan separados por responsabilidades.
            </p>
          </div>
          <div className="col-md-4">
            <h4 className="h6 text-primary fw-bold">Cómo lo compruebo</h4>
            <p className="text-white-50 mb-0">
              GitHub Actions ejecuta lint, tipos, unitarias, integración en PostgreSQL y E2E con Playwright.
              Un smoke adicional revisa endpoints desplegados y controles de acceso.
            </p>
          </div>
        </div>
        <p className="mt-4 mb-3 small text-white-50">
          Los repositorios oficiales son privados. La demo es pública; no presento métricas comerciales
          ni una certificación de seguridad que no existan.
        </p>
        <div className="d-flex flex-wrap gap-2">
          <a href="https://cifrya.com/demo" target="_blank" rel="noopener noreferrer" className="btn btn-primary rounded-pill px-4">Explorar la demo</a>
          <a href="https://github.com/MelgarejoMaycol/Portafolio/blob/main/docs/CIFRYA_CASO_TECNICO.md" target="_blank" rel="noopener noreferrer" className="btn btn-outline-light rounded-pill px-4">Leer decisiones y pruebas</a>
        </div>
      </article>
    </section>
  )
}
