import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import MenuLateral from '../components/aulas/MenuLateral.jsx'
import ConteudoAula from '../components/aulas/ConteudoAula.jsx'
import {
  getTopicos,
  getPrimeiraAula,
  getAulaPorId,
} from '../services/aulasService.js'
import '../styles/aulas.css'

export default function Aulas() {
  const { aulaId } = useParams()
  const [menuAberto, setMenuAberto] = useState(false)
  const topicos = getTopicos()

  // Entrou em /aulas sem escolher uma aula: abre a primeira
  if (!aulaId) {
    const primeira = getPrimeiraAula()
    if (!primeira) return <p>Nenhuma aula disponível ainda.</p>
    return <Navigate to={`/aulas/${primeira.id}`} replace />
  }

  const aula = getAulaPorId(aulaId)

  return (
    <div className="aulas">
      <button
        type="button"
        className="aulas__botao-menu"
        onClick={() => setMenuAberto(!menuAberto)}
        aria-expanded={menuAberto}
        aria-controls="menu-aulas"
      >
        {menuAberto ? 'Fechar menu' : 'Menu de aulas'}
      </button>

      <aside
        id="menu-aulas"
        className={menuAberto ? 'aulas__menu aberto' : 'aulas__menu'}
      >
        <MenuLateral
          topicos={topicos}
          onSelecionar={() => setMenuAberto(false)}
        />
      </aside>

      <div className="aulas__conteudo">
        {aula ? (
          <ConteudoAula aula={aula} />
        ) : (
          <p>Aula não encontrada. Escolha uma aula no menu.</p>
        )}
      </div>
    </div>
  )
}