# Documento de Requisitos

## 1. Contexto e objetivo
O projeto **[Programação para Todos]** é um site com videoaulas introdutórias
de programação, voltado a pessoas de baixa renda, e com uma pesquisa para
avaliar a iniciativa. É a atividade extensionista do curso de Engenharia de
Software da UNINTER.

## 2. Escopo
**Dentro do escopo:** página inicial, página de aulas (vídeo + resumo) e
página de pesquisa com Google Forms.
**Fora do escopo:** cadastro/login, acompanhamento de progresso, exercícios
corrigidos automaticamente, banco de dados e back-end próprio.

## 3. Partes interessadas
| Parte | Interesse |
|---|---|
| Visitante / aluno | Aprender programação de forma gratuita e simples |
| Equipe do projeto | Manter o conteúdo e coletar dados da pesquisa |
| Orientador / banca | Avaliar o trabalho |

## 4. Requisitos funcionais
| ID | Requisito |
|---|---|
| RF01 | A página inicial deve apresentar o projeto (motivação, público, perguntas frequentes e informações do trabalho). |
| RF02 | A página inicial deve ter botões de acesso às aulas e à pesquisa. |
| RF03 | A página inicial deve listar os tópicos de aula, gerados a partir do arquivo de conteúdo, levando à primeira aula de cada um. |
| RF04 | A página de aulas deve ter um menu lateral com os tópicos (agrupadores) e as aulas de cada tópico. |
| RF05 | Ao selecionar uma aula, o sistema deve exibir o vídeo do YouTube incorporado e, abaixo dele, o resumo do conteúdo. |
| RF06 | Cada aula deve ter um endereço próprio, que possa ser compartilhado. |
| RF07 | Ao acessar a página de aulas sem escolher uma aula, o sistema deve abrir a primeira aula. |
| RF08 | Ao acessar uma aula inexistente, o sistema deve exibir uma mensagem informativa. |
| RF09 | A página de pesquisa deve explicar a pesquisa e exibir o Google Forms incorporado, com link alternativo para abri-lo em nova aba. |
| RF10 | Se o formulário não estiver configurado, a página deve exibir um aviso de indisponibilidade. |
| RF11 | Um menu de navegação deve estar visível em todas as páginas. |
| RF12 | Em telas pequenas, o menu lateral de aulas deve poder ser aberto e fechado por um botão. |

## 5. Requisitos não funcionais
| ID | Categoria | Requisito |
|---|---|---|
| RNF01 | Desempenho | O site deve ser leve (sem imagens pesadas; vídeo e formulário carregados sob demanda) para funcionar em conexões lentas. |
| RNF02 | Usabilidade | O layout deve ser responsivo, com uso confortável no celular. |
| RNF03 | Acessibilidade | Usar HTML semântico, navegação por teclado, textos alternativos e contraste adequado. |
| RNF04 | Custo | O projeto deve ser hospedado e mantido sem custo. |
| RNF05 | Manutenibilidade | Conteúdo das aulas e textos institucionais devem ficar em arquivos de dados, separados do código de interface. |
| RNF06 | Compatibilidade | Funcionar nas versões atuais dos principais navegadores. |
| RNF07 | Privacidade | O site não coleta dados próprios dos visitantes; os dados da pesquisa são coletados apenas pelo Google Forms, com consentimento. |

## 6. Regras de negócio
- RN01: cada aula possui um identificador único.
- RN02: cada aula contém exatamente um vídeo e um resumo.
- RN03: tópicos servem apenas para agrupar aulas e não possuem página própria.
- RN04: a participação na pesquisa é voluntária.

## 7. Premissas e restrições
- Os vídeos são hospedados no YouTube.
- O prazo e a equipe são definidos pelo cronograma do trabalho.