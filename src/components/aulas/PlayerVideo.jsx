export default function PlayerVideo({ videoId, titulo }) {
  return (
    <div className="aspect-video w-full overflow-hidden rounded-xl bg-black shadow-sm">
      <iframe
        className="h-full w-full border-0"
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        title={titulo}
        loading="lazy"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}