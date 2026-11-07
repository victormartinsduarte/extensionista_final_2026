import { describe, it, expect, vi } from 'vitest'
import { pesquisa } from '../../src/data/projeto.js'
import {
  formularioDisponivel,
  getUrlEmbutida,
} from '../../src/services/pesquisaService.js'

vi.mock('../../src/data/projeto.js', () => ({
  pesquisa: { urlFormulario: '' },
}))

const URL_VALIDA = 'https://docs.google.com/forms/d/e/ABC123/viewform'

describe('pesquisaService', () => {
  it('indica indisponível quando não há link', () => {
    pesquisa.urlFormulario = ''
    expect(formularioDisponivel()).toBe(false)
  })

  it('indica indisponível para link que não é do Google Forms', () => {
    pesquisa.urlFormulario = 'https://forms.gle/abc123'
    expect(formularioDisponivel()).toBe(false)
  })

  it('indica disponível para link do Google Forms', () => {
    pesquisa.urlFormulario = URL_VALIDA
    expect(formularioDisponivel()).toBe(true)
  })

  it('monta a URL de incorporação com embedded=true', () => {
    pesquisa.urlFormulario = URL_VALIDA
    expect(getUrlEmbutida()).toBe(`${URL_VALIDA}?embedded=true`)
  })
})