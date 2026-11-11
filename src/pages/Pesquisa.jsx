import {
  formularioDisponivel,
  getUrlFormulario,
  getUrlEmbutida,
} from '../services/pesquisaService.js'

const blocos = [
  {
    id: 'objetivo',
    titulo: 'Objetivo',
    texto:
      'Entender se as aulas ajudam quem está começando a aprender sobre tecnologia e o que pode ser melhorado.',
  },
  {
    id: 'participantes',
    titulo: 'Quem pode participar',
    texto: 'Pessoas que assistiram, ou leram, a pelo menos uma aula do site.',
  },
  {
    id: 'dados',
    titulo: 'Sobre os seus dados',
    texto:
      'A participação é voluntária e as respostas serão usadas apenas para fins acadêmicos deste projeto.',
  },
]

export default function Pesquisa() {
  return (
    <section>
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Pesquisa
      </h1>
      <p className="mt-4 max-w-prose text-lg text-slate-600">
        Esta pesquisa faz parte do nosso projeto extensionista da faculdade, e nos
        ajuda a entender como melhorar.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {blocos.map((bloco) => (
          <div
            key={bloco.id}
            className="rounded-xl border border-slate-200 bg-white p-5"
          >
            <h2 className="font-semibold">{bloco.titulo}</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {bloco.texto}
            </p>
          </div>
        ))}
      </div>

      {formularioDisponivel() ? (
        <>
          <div className="mt-10 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <iframe
              className="block h-[80vh] min-h-[640px] w-full border-0"
              src={getUrlEmbutida()}
              title="Formulário da pesquisa"
              loading="lazy"
            >
              Carregando…
            </iframe>
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Está com dificuldade para ver ou responder o formulário?{' '}
            <a
              href={getUrlFormulario()}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline underline-offset-2 hover:text-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Abra em uma nova aba
            </a>
            .
          </p>
        </>
      ) : (
        <p className="mt-10 rounded-xl border border-dashed border-slate-300 p-6 text-slate-600">
          O formulário ainda não está disponível. Volte em breve.
        </p>
      )}
    </section>
  )
}