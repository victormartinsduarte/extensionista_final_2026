import { NavLink } from 'react-router-dom'
import { projeto } from '../../data/projeto.js'

const links = [
  { to: '/', texto: 'Início' },
  { to: '/aulas', texto: 'Aulas' },
  { to: '/pesquisa', texto: 'Pesquisa' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="header__conteudo">
        <span className="header__logo">{projeto.nome}</span>
        <nav className="header__nav" aria-label="Navegação principal">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? 'header__link ativo' : 'header__link'
              }
            >
              {link.texto}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}