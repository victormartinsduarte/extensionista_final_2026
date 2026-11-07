import { faq } from '../../data/projeto.js'

export default function Faq() {
  return (
    <section className="secao faq">
      <h2>Perguntas frequentes</h2>
      {faq.map((item) => (
        <details key={item.id}>
          <summary>{item.pergunta}</summary>
          <p>{item.resposta}</p>
        </details>
      ))}
    </section>
  )
}