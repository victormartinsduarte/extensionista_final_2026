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

function listarAulas() {
  return dados.topicos.flatMap((topico) => topico.aulas)
}

export function getAulaAnterior(id) {
  const aulas = listarAulas()
  const indice = aulas.findIndex((aula) => aula.id === id)
  return indice > 0 ? aulas[indice - 1] : null
}

export function getProximaAula(id) {
  const aulas = listarAulas()
  const indice = aulas.findIndex((aula) => aula.id === id)
  return indice !== -1 && indice < aulas.length - 1 ? aulas[indice + 1] : null
}