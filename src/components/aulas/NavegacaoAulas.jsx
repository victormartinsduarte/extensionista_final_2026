import { Link } from 'react-router-dom'

const estiloCard =
  'flex flex-1 flex-col rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'

const estiloRotulo =
  'text-xs font-medium uppercase tracking-wider text-slate-500'

function Espaco() {
  return <span className="hidden flex-1 sm:block" aria-hidden="true" />
}

export default function NavegacaoAulas({ anterior, proxima }) {
  if (!anterior && !proxima) return null

  return (
    <nav
      aria-label="Navegação entre aulas"
      className="mt-10 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row"
    >
      {anterior ? (
        <Link to={`/aulas/${anterior.id}`} className={estiloCard}>
          <span className={estiloRotulo}>← Aula anterior</span>
          <span className="mt-1 font-semibold">{anterior.titulo}</span>
        </Link>
      ) : (
        <Espaco />
      )}

      {proxima ? (
        <Link
          to={`/aulas/${proxima.id}`}
          className={`${estiloCard} sm:items-end sm:text-right`}
        >
          <span className={estiloRotulo}>Próxima aula →</span>
          <span className="mt-1 font-semibold">{proxima.titulo}</span>
        </Link>
      ) : (
        <Espaco />
      )}
    </nav>
  )
}