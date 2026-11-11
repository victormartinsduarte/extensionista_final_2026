import { projeto } from '../../data/projeto.js'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="mx-auto w-full max-w-5xl px-4 py-6 text-sm text-slate-500">
        <p>Atividade Extensionista · {projeto.curso} - {projeto.instituicao}</p>
      </div>
    </footer>
  )
}