import { NavLink } from 'react-router-dom'

export default function MenuLateral({ topicos, onSelecionar }) {
  return (
    <nav className="menu-aulas" aria-label="Menu de aulas">
      {topicos.map((topico) => (
        <section key={topico.id} className="menu-aulas__topico">
          <h2 className="menu-aulas__titulo">{topico.titulo}</h2>
          <ul className="menu-aulas__lista">
            {topico.aulas.map((aula) => (
              <li key={aula.id}>
                <NavLink
                  to={`/aulas/${aula.id}`}
                  onClick={onSelecionar}
                  className={({ isActive }) =>
                    isActive ? 'menu-aulas__link ativo' : 'menu-aulas__link'
                  }
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