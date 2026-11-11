import Hero from '../components/home/Hero.jsx'
import TopicosDestaque from '../components/home/TopicosDestaque.jsx'
import Faq from '../components/home/Faq.jsx'
import Secao from '../components/ui/Secao.jsx'
import Botao from '../components/ui/Botao.jsx'
import { projeto, garantias } from '../data/projeto.js'

export default function Home() {
  return (
    <>
      <Hero />

      <Secao titulo="Por que este projeto existe">
        <div className="max-w-prose space-y-4 text-slate-600">
          <p>
            O conhecimento de áreas da Tecnologia da Informação (TI) 
            é uma habilidade cada vez mais presente no mercado de trabalho, 
            porém muitas pessoas ainda não sabem como fazer para adentrar 
            esse universo. Este projeto nasce para ajudar a destruir essas barreiras
            e facilitar o acesso a esse conhecimento, oferecendo aulas gratuitas, 
            curtas e em linguagem simples para quem está começando do zero.
          </p>
          <p>
            Este projeto é um trabalho de pesquisa da faculdade: 
            precisamos saber se ele realmente impacta e ajuda a 
            quem está começando, por isso não esqueçam de preencher 
            o formulário após assistirem as aulas. Obrigado!  
          </p>
        </div>
      </Secao>

      <TopicosDestaque />

      <Secao titulo="Para quem é">
        <ul className="grid gap-4 sm:grid-cols-2">
          {garantias.map((item) => (
            <li key={item.id} className="flex items-start gap-3">
              <span
                aria-hidden="true"
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-soft text-sm font-bold text-primary"
              >
                ✓
              </span>
              {item.texto}
            </li>
          ))}
        </ul>
      </Secao>

      <section className="my-12 rounded-2xl bg-primary px-6 py-10 text-white sm:px-10">
        <h2 className="text-2xl font-semibold tracking-tight">
          Ajude a melhorar este projeto
        </h2>
        <p className="mt-3 max-w-prose text-primary-soft">
          Sua opinião nos ajuda a avaliar e aprimorar. Participe da
          nossa pesquisa.
        </p>
        <div className="mt-6">
          <Botao to="/pesquisa" variante="claro">
            Responda o fomulário
          </Botao>
        </div>
      </section>

      <Faq />

      <Secao titulo="Sobre o projeto">
        <div className="max-w-prose space-y-4 text-slate-600">
          <p>
            {projeto.nome} é um projeto extensionista do curso de{' '}
            {projeto.curso} da {projeto.instituicao}.
          </p>
          <p>
            <strong className="font-semibold text-slate-900">
              Integrantes:
            </strong>{' '}
            {projeto.integrantes.join(', ')}
          </p>
        </div>
      </Secao>
    </>
  )
}