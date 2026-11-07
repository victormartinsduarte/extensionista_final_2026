import { describe, it, expect } from 'vitest'
import dados from '../../src/data/aulas.json'

const aulas = dados.topicos.flatMap((topico) => topico.aulas)

describe('integridade do aulas.json', () => {
  it('todo tópico tem id, título e ao menos uma aula', () => {
    for (const topico of dados.topicos) {
      expect(topico.id, 'tópico sem id').toBeTruthy()
      expect(topico.titulo, `tópico ${topico.id}`).toBeTruthy()
      expect(topico.aulas.length, `tópico ${topico.id}`).toBeGreaterThan(0)
    }
  })

  it('os ids das aulas são únicos', () => {
    const ids = aulas.map((aula) => aula.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('toda aula tem título, videoId e resumo preenchidos', () => {
    for (const aula of aulas) {
      expect(aula.titulo, `aula ${aula.id}`).toBeTruthy()
      expect(aula.videoId, `aula ${aula.id}`).toBeTruthy()
      expect(aula.resumo, `aula ${aula.id}`).toBeTruthy()
    }
  })
})