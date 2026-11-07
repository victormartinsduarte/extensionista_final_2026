import dados from '../data/aulas.json'

export function getTopicos() {
  return dados.topicos
}

export function getPrimeiraAula() {
  return dados.topicos[0]?.aulas[0] ?? null
}

export function getAulaPorId(id) {
  for (const topico of dados.topicos) {
    const aula = topico.aulas.find((a) => a.id === id)
    if (aula) {
      return { ...aula, topicoTitulo: topico.titulo }
    }
  }
  return null
}