import Markdown from 'react-markdown'
import PlayerVideo from './PlayerVideo.jsx'

const componentes = {
  img: ({ src, alt }) => <img src={src} alt={alt ?? ''} loading="lazy" />,
  a: ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  ),
}

export default function ConteudoAula({ aula }) {
  const temVideo = Boolean(aula.videoId)

  return (
    <article>
      <p className="text-sm font-medium text-primary">{aula.topicoTitulo}</p>
      <h1 className="mb-6 mt-1 text-3xl font-bold tracking-tight">
        {aula.titulo}
      </h1>

      {temVideo && <PlayerVideo videoId={aula.videoId} titulo={aula.titulo} />}

      <div className={temVideo ? 'mt-8' : ''}>
        {temVideo && <h2 className="mb-3 text-lg font-semibold">Conteúdo</h2>}
        <div className="prose prose-slate prose-a:text-primary prose-img:rounded-xl">
          <Markdown components={componentes}>{aula.conteudo}</Markdown>
        </div>
      </div>
    </article>
  )
}