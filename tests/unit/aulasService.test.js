import { describe, it, expect } from 'vitest'
import {
  getTopicos,
  getPrimeiraAula,
  getAulaPorId,
} from '../../src/services/aulasService.js'

describe('aulasService', () => {
  it('retorna a lista de tópicos', () => {
    expect(getTopicos().length).toBeGreaterThan(0)
  })

  it('retorna a primeira aula do primeiro tópico', () => {
    const primeira = getPrimeiraAula()
    expect(primeira).not.toBeNull()
    expect(primeira.id).toBe(getTopicos()[0].aulas[0].id)
  })

  it('encontra uma aula pelo id e informa o tópico dela', () => {
    const topico = getTopicos()[0]
    const aula = getAulaPorId(topico.aulas[0].id)
    expect(aula.titulo).toBe(topico.aulas[0].titulo)
    expect(aula.topicoTitulo).toBe(topico.titulo)
  })

  it('retorna null para um id que não existe', () => {
    expect(getAulaPorId('id-que-nao-existe')).toBeNull()
  })
})