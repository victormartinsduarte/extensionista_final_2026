import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero">
      <p className="hero__etiqueta">Atividade extensionista</p>
      <h1 className="hero__titulo">Aprender a programar é para todos.</h1>
      <p className="hero__subtitulo">
        Aulas gratuitas, em linguagem simples, para quem está dando o primeiro
        passo no mundo da programação.
      </p>
      <div className="hero__acoes">
        <Link to="/aulas" className="botao botao--primario">
          Começar a aprender
        </Link>
        <Link to="/pesquisa" className="botao botao--secundario">
          Participar da pesquisa
        </Link>
      </div>
    </section>
  )
}