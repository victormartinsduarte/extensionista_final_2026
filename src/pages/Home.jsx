import { Link } from 'react-router-dom'
import Hero from '../components/home/Hero.jsx'
import TopicosDestaque from '../components/home/TopicosDestaque.jsx'
import Faq from '../components/home/Faq.jsx'
import { projeto, garantias } from '../data/projeto.js'
import '../styles/home.css'

export default function Home() {
  return (
    <>
      <Hero />

      <section className="secao secao--texto">
        <h2>Por que este projeto existe</h2>
        <p>
          Programar é uma habilidade cada vez mais presente no mercado de
          trabalho, mas o acesso ao ensino de tecnologia ainda não é igual para
          todos. Este projeto nasce para reduzir essa distância, oferecendo
          aulas gratuitas, curtas e em linguagem simples para quem está
          começando do zero.
        </p>
        <p>
          Ele também é um trabalho de pesquisa: queremos entender se esse
          formato realmente ajuda quem está aprendendo.
        </p>
      </section>

      <TopicosDestaque />

      <section className="secao">
        <h2>Para quem é</h2>
        <ul className="garantias">
          {garantias.map((item) => (
            <li key={item.id}>
              <span className="garantias__icone" aria-hidden="true">
                ✓
              </span>
              {item.texto}
            </li>
          ))}
        </ul>
      </section>

      <section className="chamada">
        <h2>Ajude a melhorar este projeto</h2>
        <p>
          Sua opinião ajuda a avaliar e a aprimorar as aulas. Participe da
          nossa pesquisa.
        </p>
        <Link to="/pesquisa" className="botao botao--claro">
          Conhecer a pesquisa
        </Link>
      </section>

      <Faq />

      <section className="secao secao--texto">
        <h2>Sobre o projeto</h2>
        <p>
          {projeto.nome} é uma atividade extensionista do curso de{' '}
          {projeto.curso} da {projeto.instituicao}.
        </p>
        <p>
          <strong>Integrantes:</strong> {projeto.integrantes.join(', ')}
          <br />
          <strong>Orientação:</strong> {projeto.orientador}
        </p>
      </section>
    </>
  )
}