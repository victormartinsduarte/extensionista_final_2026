import { Link } from 'react-router-dom'
import Secao from '../ui/Secao.jsx'
import { getTopicos } from '../../services/aulasService.js'

export default function TopicosDestaque() {
  const topicos = getTopicos().filter((topico) => topico.aulas.length > 0)

  return (
    <Secao titulo="O que você vai aprender">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topicos.map((topico) => (
          <Link
            key={topico.id}
            to={`/aulas/${topico.aulas[0].id}`}
            className="group rounded-xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-primary hover:shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <h3 className="text-lg font-semibold">{topico.titulo}</h3>
            <p className="mt-1 text-sm text-slate-500">
              {topico.aulas.length}{' '}
              {topico.aulas.length === 1 ? 'aula' : 'aulas'}
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-primary">
              Ver aulas{' '}
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