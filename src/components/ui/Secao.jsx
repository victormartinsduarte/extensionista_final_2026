export default function Secao({ titulo, children, className = '' }) {
  return (
    <section className={`border-t border-slate-200 py-12 ${className}`}>
      {titulo && (
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">{titulo}</h2>
      )}
      {children}
    </section>
  )
}