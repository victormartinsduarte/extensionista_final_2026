import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', texto: 'Início' },
  { to: '/aulas', texto: 'Aulas' },
  { to: '/pesquisa', texto: 'Pesquisa' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="header__conteudo">
        <span className="header__logo">Tecnologia para Todos</span>
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