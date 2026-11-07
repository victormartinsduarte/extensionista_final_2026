import { Link } from 'react-router-dom'

const base =
  'inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2'

const variantes = {
  primario:
    'bg-primary text-white hover:bg-primary-dark focus-visible:outline-primary',
  secundario:
    'border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 focus-visible:outline-primary',
  claro:
    'bg-white text-primary-dark hover:bg-primary-soft focus-visible:outline-white',
}

export default function Botao({ to, variante = 'primario', children }) {
  return (
    <Link to={to} className={`${base} ${variantes[variante]}`}>
      {children}
    </Link>
  )
}