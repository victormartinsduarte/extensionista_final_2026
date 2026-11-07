import PlayerVideo from './PlayerVideo.jsx'

export default function ConteudoAula({ aula }) {
  const paragrafos = aula.resumo.split('\n\n')

  return (
    <article className="conteudo-aula">
      <p className="conteudo-aula__topico">{aula.topicoTitulo}</p>
      <h1 className="conteudo-aula__titulo">{aula.titulo}</h1>

      <PlayerVideo videoId={aula.videoId} titulo={aula.titulo} />

      <div className="conteudo-aula__resumo">
        <h2>Resumo</h2>
        {paragrafos.map((texto, i) => (
          <p key={i}>{texto}</p>
        ))}
      </div>
    </article>
  )
}