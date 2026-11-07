import { describe, it, expect } from 'vitest'
import {
  getTopicos,
  getPrimeiraAula,
  getAulaPorId,
  getAulaAnterior,
  getProximaAula,
} from '../../src/services/aulasService.js'

const todas = getTopicos().flatMap((topico) => topico.aulas)

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

describe('navegação entre aulas', () => {
  it('a primeira aula não tem aula anterior', () => {
    expect(getAulaAnterior(todas[0].id)).toBeNull()
  })

  it('a última aula não tem próxima aula', () => {
    expect(getProximaAula(todas[todas.length - 1].id)).toBeNull()
  })

  it('a próxima aula segue a ordem do menu, inclusive entre tópicos', () => {
    for (let i = 0; i < todas.length - 1; i++) {
      expect(getProximaAula(todas[i].id).id).toBe(todas[i + 1].id)
    }
  })

  it('a aula anterior segue a ordem inversa do menu', () => {
    for (let i = 1; i < todas.length; i++) {
      expect(getAulaAnterior(todas[i].id).id).toBe(todas[i - 1].id)
    }
  })

  it('retorna null para anterior e próxima de um id inexistente', () => {
    expect(getAulaAnterior('id-que-nao-existe')).toBeNull()
    expect(getProximaAula('id-que-nao-existe')).toBeNull()
  })
})