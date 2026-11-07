import { Link } from 'react-router-dom'
import { getTopicos } from '../../services/aulasService.js'

export default function TopicosDestaque() {
  const topicos = getTopicos().filter((topico) => topico.aulas.length > 0)

  return (
    <section className="secao">
      <h2>O que você vai aprender</h2>
      <div className="cards">
        {topicos.map((topico) => (
          <Link
            key={topico.id}
            to={`/aulas/${topico.aulas[0].id}`}
            className="card"
          >
            <h3 className="card__titulo">{topico.titulo}</h3>
            <p className="card__info">
              {topico.aulas.length}{' '}
              {topico.aulas.length === 1 ? 'aula' : 'aulas'}
            </p>
            <span className="card__link">Ver aulas →</span>
          </Link>
        ))}
      </div>
    </section>
  )
}