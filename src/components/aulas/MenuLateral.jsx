import { NavLink } from 'react-router-dom'

function estiloLink({ isActive }) {
  return [
    'block rounded-lg px-3 py-2.5 text-sm transition-colors',
    'focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary',
    isActive
      ? 'bg-primary-soft font-medium text-primary'
      : 'text-slate-700 hover:bg-slate-100',
  ].join(' ')
}

export default function MenuLateral({ topicos, onSelecionar }) {
  return (
    <nav aria-label="Menu de aulas" className="space-y-6">
      {topicos.map((topico) => (
        <section key={topico.id}>
          <h2 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            {topico.titulo}
          </h2>
          <ul className="space-y-0.5">
            {topico.aulas.map((aula) => (
              <li key={aula.id}>
                <NavLink
                  to={`/aulas/${aula.id}`}
                  onClick={onSelecionar}
                  className={estiloLink}
                >
                  {aula.titulo}
                </NavLink>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </nav>
  )
}