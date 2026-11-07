import { Link, NavLink } from 'react-router-dom'
import { projeto } from '../../data/projeto.js'

const links = [
  { to: '/', texto: 'Início' },
  { to: '/aulas', texto: 'Aulas' },
  { to: '/pesquisa', texto: 'Pesquisa' },
]

function estiloLink({ isActive }) {
  return [
    'rounded-lg px-3 py-1.5 text-sm font-medium transition-colors',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary',
    isActive
      ? 'bg-primary-soft text-primary'
      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900',
  ].join(' ')
}

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl flex-wrap items-center justify-between gap-x-4 gap-y-2 px-4 py-3">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold tracking-tight"
        >
          <span
            className="h-2.5 w-2.5 rounded-full bg-primary"
            aria-hidden="true"
          />
          {projeto.nome}
        </Link>

        <nav aria-label="Navegação principal" className="flex gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={estiloLink}
            >
              {link.texto}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}