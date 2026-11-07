import PlayerVideo from './PlayerVideo.jsx'

export default function ConteudoAula({ aula }) {
  const paragrafos = aula.resumo.split('\n\n')

  return (
    <article>
      <p className="text-sm font-medium text-primary">{aula.topicoTitulo}</p>
      <h1 className="mb-6 mt-1 text-3xl font-bold tracking-tight">
        {aula.titulo}
      </h1>

      <PlayerVideo videoId={aula.videoId} titulo={aula.titulo} />

      <div className="mt-8">
        <h2 className="mb-3 text-lg font-semibold">Resumo</h2>
        <div className="max-w-prose space-y-4 leading-relaxed text-slate-600">
          {paragrafos.map((texto, i) => (
            <p key={i}>{texto}</p>
          ))}
        </div>
      </div>
    </article>
  )
}