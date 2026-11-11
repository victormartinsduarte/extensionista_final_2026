import { Link } from 'react-router-dom'
import Secao from '../ui/Secao.jsx'
import { getTodasAulas } from '../../services/aulasService.js'

export default function TopicosDestaque() {
  const aulas = getTodasAulas()

  return (
    <Secao titulo="O que você vai aprender">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {aulas.map((aula, indice) => (
          <Link
            key={aula.id}
            to={`/aulas/${aula.id}`}
            className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <span className="text-sm font-semibold text-primary">
              Aula {indice + 1}
            </span>
            <h3 className="mt-1 text-lg font-semibold">{aula.titulo}</h3>
            <span className="mt-4 inline-block text-sm font-semibold text-primary">
              Abrir{' '}
              <span
                aria-hidden="true"
                className="inline-block transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </span>
          </Link>
        ))}
      </div>
    </Secao>
  )
}