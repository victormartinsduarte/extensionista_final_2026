import {
  formularioDisponivel,
  getUrlFormulario,
  getUrlEmbutida,
} from '../services/pesquisaService.js'
import '../styles/pesquisa.css'

export default function Pesquisa() {
  return (
    <section className="pesquisa">
      <h1>Pesquisa</h1>
      <p className="pesquisa__intro">
        Esta pesquisa faz parte do nosso trabalho de conclusão de curso e nos
        ajuda a entender como melhorar as aulas.
      </p>

      <div className="pesquisa__blocos">
        <div className="pesquisa__bloco">
          <h2>Objetivo</h2>
          <p>
            Entender se as aulas ajudam quem está começando a aprender
            programação e o que pode ser melhorado.
          </p>
        </div>
        <div className="pesquisa__bloco">
          <h2>Quem pode participar</h2>
          <p>Pessoas que assistiram a pelo menos uma aula do site.</p>
        </div>
        <div className="pesquisa__bloco">
          <h2>Sobre os seus dados</h2>
          <p>
            A participação é voluntária e as respostas serão usadas apenas
            para fins acadêmicos deste trabalho.
          </p>
        </div>
      </div>

      {formularioDisponivel() ? (
        <>
          <div className="pesquisa__formulario">
            <iframe
              src={getUrlEmbutida()}
              title="Formulário da pesquisa"
              loading="lazy"
            >
              Carregando…
            </iframe>
          </div>
          <p className="pesquisa__alternativa">
            Está com dificuldade para ver ou responder o formulário?{' '}
            <a
              href={getUrlFormulario()}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abra em uma nova aba
            </a>
            .
          </p>
        </>
      ) : (
        <p className="pesquisa__aviso">
          O formulário ainda não está disponível. Volte em breve.
        </p>
      )}
    </section>
  )
}