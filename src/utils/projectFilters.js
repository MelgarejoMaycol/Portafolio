export const filtrosProyectos = [
  { id: 'todos', texto: 'Todos', icono: 'fa-border-all' },
  { id: 'frontend', texto: 'Frontend', icono: 'fa-code' },
  { id: 'backend', texto: 'Backend', icono: 'fa-server' },
  { id: 'fullstack', texto: 'Full Stack', icono: 'fa-layer-group' }
]

export function filtrarProyectos(proyectos, filtro) {
  if (filtro === 'todos') return proyectos
  return proyectos.filter((proyecto) => proyecto.categorias.includes(filtro))
}

export function mostrarRecetasAPI(filtro) {
  return filtro === 'todos' || filtro === 'backend'
}
