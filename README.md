# Programação para Todos

Site com videoaulas introdutórias de programação para pessoas de baixa renda,
com uma pesquisa para avaliar a iniciativa. Trabalho de conclusão do curso de
Engenharia de Software — [UNINTER].

**Site:** https://SEU-USUARIO.github.io/NOME-DO-REPO/

## Funcionalidades
- Página inicial com apresentação do projeto
- Aulas em vídeo (YouTube) com resumo e menu lateral por tópicos
- Página de pesquisa com Google Forms incorporado

## Tecnologias
React · Vite · React Router · Vitest · GitHub Actions · GitHub Pages

## Como rodar localmente
```bash
npm install
npm run dev
```
Outros comandos: `npm test` (testes), `npm run build` (versão de produção).

## Como adicionar uma aula
Edite `src/data/aulas.json`, incluindo a aula em um tópico existente (ou um
novo tópico). Cada aula precisa de `id` único, `titulo`, `videoId` (código do
YouTube) e `resumo`. Rode `npm test` para validar.

## Como configurar a pesquisa
Cole o link do Google Forms (formato `docs.google.com/forms/.../viewform`) em
`pesquisa.urlFormulario`, no arquivo `src/data/projeto.js`.

## Estrutura
```
docs/      documentação (requisitos, casos de uso, arquitetura, testes)
src/       código da aplicação
tests/     testes unitários e checklist manual
.github/   deploy automático
```

## Documentação
- [Requisitos](docs/01-requisitos.md)
- [Casos de uso](docs/02-casos-de-uso.md)
- [Arquitetura](docs/03-arquitetura.md)
- [Plano de testes](docs/04-plano-de-testes.md)

## Equipe
Victor Duarte e Guilherme Duarte · Orientação: [orientador]