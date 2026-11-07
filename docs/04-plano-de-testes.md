# Plano de Testes

## 1. Estratégia
| Tipo | Ferramenta | O que cobre |
|---|---|---|
| Unitário | Vitest (`npm test`) | Serviços e integridade dos dados de aulas |
| Manual | `tests/manual/checklist.md` | Navegação, vídeo, formulário e responsividade |
| Dispositivos | Celular real e dois navegadores | RNF01, RNF02 e RNF06 |

## 2. Critérios de aceite
- Todos os testes unitários passam.
- O checklist manual é concluído sem falhas críticas.
- O deploy em produção abre sem erros no console.

## 3. Casos de teste
| ID | Requisito | Descrição | Resultado esperado | Tipo |
|---|---|---|---|---|
| CT01 | RF03 | Listar tópicos | A lista de tópicos não é vazia | Unitário |
| CT02 | RF07 | Obter a primeira aula | Retorna a primeira aula do primeiro tópico | Unitário |
| CT03 | RF05 | Buscar aula por id | Retorna a aula com o nome do tópico | Unitário |
| CT04 | RF08 | Buscar id inexistente | Retorna nulo | Unitário |
| CT05 | RN01 | Ids de aula únicos | Não há ids repetidos | Unitário |
| CT06 | RN02 | Aula completa | Toda aula tem título, vídeo e resumo | Unitário |
| CT07 | RF10 | Formulário não configurado | Considerado indisponível | Unitário |
| CT08 | RF09 | Montar URL de incorporação | Acrescenta `embedded=true` | Unitário |
| CT09 | RF04, RF06 | Menu e URL da aula | Clicar na aula troca conteúdo e endereço | Manual |
| CT10 | RF12 | Menu no celular | Botão abre e fecha o menu | Manual |
| CT11 | RF09 | Formulário embutido | Formulário carrega e pode ser respondido | Manual |
| CT12 | RNF02 | Responsividade | Sem rolagem horizontal em celular | Manual |
| CT13 | RNF03 | Teclado | Navegação completa via Tab/Enter | Manual |
| CT14 | RF13 | Primeira aula sem anterior | Retorna nulo | Unitário |
| CT15 | RF13 | Última aula sem próxima | Retorna nulo | Unitário |
| CT16 | RF13, RN05 | Ordem entre tópicos | Próxima/anterior seguem a ordem do menu | Unitário |
| CT17 | RF13 | Atalhos na interface | Os botões levam à aula certa e a página volta ao topo | Manual |

## 4. Registro de execução
| Data | Versão | Responsável | Resultado | Observações |
|---|---|---|---|---|
| [ ] | [ ] | [ ] | [ ] | [ ] |