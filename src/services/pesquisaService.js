import { pesquisa } from '../data/projeto.js'

const PREFIXO_GOOGLE_FORMS = 'https://docs.google.com/forms/'

export function formularioDisponivel() {
  return pesquisa.urlFormulario.startsWith(PREFIXO_GOOGLE_FORMS)
}

export function getUrlFormulario() {
  return pesquisa.urlFormulario
}

export function getUrlEmbutida() {
  const url = new URL(pesquisa.urlFormulario)
  url.searchParams.set('embedded', 'true')
  return url.toString()
}