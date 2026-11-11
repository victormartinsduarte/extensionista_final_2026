import Botao from '../ui/Botao.jsx'

export default function Hero() {
  return (
    <section className="max-w-3xl py-12 sm:py-20">
      <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
        Atividade Extensionista
      </p>
      <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
        Aprender sobre tecnologia e programação deve ser para todos.
      </h1>
      <p className="mt-5 max-w-2xl text-lg text-slate-600 sm:text-xl">
        Aulas gratuitas, em linguagem simples, para quem está dando o primeiro
        passo no mundo da tecnologia.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Botao to="/aulas">Começar a aprender</Botao>
        <Botao to="/pesquisa" variante="secundario">
          Participar da pesquisa
        </Botao>
      </div>
    </section>
  )
}