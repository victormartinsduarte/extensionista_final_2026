import Secao from '../ui/Secao.jsx'
import { faq } from '../../data/projeto.js'

export default function Faq() {
  return (
    <Secao titulo="Perguntas frequentes">
      <div className="divide-y divide-slate-200 border-y border-slate-200">
        {faq.map((item) => (
          <details key={item.id} className="group py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
              {item.pergunta}
              <span
                aria-hidden="true"
                className="text-xl text-slate-400 transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-prose text-slate-600">{item.resposta}</p>
          </details>
        ))}
      </div>
    </Secao>
  )
}