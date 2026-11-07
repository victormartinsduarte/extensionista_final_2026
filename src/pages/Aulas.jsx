import { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import MenuLateral from '../components/aulas/MenuLateral.jsx'
import ConteudoAula from '../components/aulas/ConteudoAula.jsx'
import NavegacaoAulas from '../components/aulas/NavegacaoAulas.jsx'
import {
  getTopicos,
  getPrimeiraAula,
  getAulaPorId,
  getAulaAnterior,
  getProximaAula,
} from '../services/aulasService.js'

const estiloAviso =
  'rounded-xl border border-dashed border-slate-300 p-6 text-slate-600'

export default function Aulas() {
  const { aulaId } = useParams()
  const [menuAberto, setMenuAberto] = useState(false)
  const topicos = getTopicos()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [aulaId])

  // Entrou em /aulas sem escolher uma aula: abre a primeira
  if (!aulaId) {
    const primeira = getPrimeiraAula()
    if (!primeira) {
      return <p className={estiloAviso}>Nenhuma aula disponível ainda.</p>
    }
    return <Navigate to={`/aulas/${primeira.id}`} replace />
  }

  const aula = getAulaPorId(aulaId)

  return (
    <div className="grid gap-6 md:grid-cols-[16rem_1fr] md:gap-10">
      <button
        type="button"
        onClick={() => setMenuAberto(!menuAberto)}
        aria-expanded={menuAberto}
        aria-controls="menu-aulas"
        className="inline-flex items-center gap-2 justify-self-start rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-medium transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:hidden"
      >
        <span aria-hidden="true">{menuAberto ? '✕' : '☰'}</span>
        {menuAberto ? 'Fechar menu' : 'Menu de aulas'}
      </button>

      <aside
        id="menu-aulas"
        className={`${menuAberto ? 'block' : 'hidden'} rounded-xl border border-slate-200 p-4 md:sticky md:top-20 md:block md:max-h-[calc(100vh-6rem)] md:self-start md:overflow-y-auto md:rounded-none md:border-0 md:p-0`}
      >
        <MenuLateral
          topicos={topicos}
          onSelecionar={() => setMenuAberto(false)}
        />
      </aside>

      <div className="min-w-0">
          {aula ? (
            <>
              <ConteudoAula aula={aula} />
              <NavegacaoAulas
                anterior={getAulaAnterior(aula.id)}
                proxima={getProximaAula(aula.id)}
              />
            </>
          ) : (
            <p className={estiloAviso}>
              Aula não encontrada. Escolha uma aula no menu.
            </p>
          )}
      </div>
    </div>
  )
}