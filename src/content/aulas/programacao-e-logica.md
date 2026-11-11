## Módulo Prático: Desvendando a Lógica de Programação

**1. Como o computador pensa? (O Ciclo da Informação)**

Um programa de computador nada mais é do que uma receita de bolo muito precisa. 
O computador não tem intuição própria; ele segue instruções de cima para baixo, linha por linha, sem pular etapas.
Todo sistema que você usa no dia a dia opera sob três passos fundamentais:

![Fluxo de Processamento de Dados](imagens/aulas/Imagem3.png)

**2. Saída de Dados (Output): Ensinando o computador a falar**

A primeira coisa que precisamos aprender é fazer o computador exibir uma mensagem na tela. Em Python, usamos a instrução print() (que significa "imprimir" ou "exibir").

![Saída de Dados](imagens/aulas/Imagem4.png)

Como funciona? Tudo o que colocamos dentro dos parênteses e entre aspas "..." é entendido pelo computador como um texto literal.
O que acontece? O computador lê a linha e desenha exatamente essas letras na tela do usuário.

![Código de Entrada e Saída no Terminal](imagens/aulas/Imagem5.png)

**3. Entrada (Input) e Memória: O computador ouvindo você**

Para um programa ser útil, ele não pode apenas falar; ele precisa escutar o usuário e guardar essa resposta para usar depois.
Para guardar informações na memória do computador, usamos Variáveis. Pense em uma variável como uma caixa com uma etiqueta com um nome onde colocamos um dado dentro.

![Entrada e Memória](imagens/aulas/Imagem6.png)

**input()**
Faz o programa pausar e abrir espaço para o usuário digitar algo pelo teclado.

**nome =**
Cria a caixa com a etiqueta "nome" e guarda o que a pessoa digitou ali dentro.

Podemos juntar a entrada e a saída em duas linhas simples:

![Entrada e Saída](imagens/aulas/Imagem7.png)

Se o usuário digitar Carlos, o programa responde automaticamente: 
- *Prazer em te conhecer, Carlos!*

![Conteúdo da Variável](imagens/aulas/Imagem8.png)

**4. Tomando Decisões: O if e o else**

No mundo real, tomamos decisões baseadas em condições o tempo todo:
"Se estiver chovendo, levo guarda-chuva. Senão, vou de óculos escuros."

Na programação, fazemos exatamente a mesma coisa usando as palavras em inglês:
if = "Se" (verifica se uma condição é verdadeira).
else = "Senão" (o caminho alternativo, caso a condição não seja atendida).

Veja este exemplo em Python de um sistema de desconto para ingressos de cinema:

![Exemplo de If e Else](imagens/aulas/Imagem9.png)

Entendendo o código passo a passo:
**idade = 15** => Criamos a gaveta idade e guardamos o número 15 nela.
**if idade < 18** => O computador faz a pergunta lógica: "O valor dentro de idade é menor que 18?".
Como 15 é menor que 18, a resposta é Sim (Verdadeiro).
O computador entra no bloco e executa o print(**"Você tem direito à meia-entrada!"**).
**else:** => O bloco alternativo é simplesmente ignorado pelo computador, pois a condição do “if” já foi satisfeita.
Se trocássemos o valor da idade para 25, o teste 25 < 18 seria Falso. O computador pularia a primeira mensagem e executaria apenas o que está dentro do else: "**Ingresso no valor integral.**".

![Exemplo de Como Funciona o If e Else](imagens/aulas/Imagem10.png)

**5. O Código Completo Integrado**

Juntando Entrada, Tomada de Decisão e Saída, temos um programa completo de apenas 6 linhas:

![Código completo](imagens/aulas/Imagem11.png)

**Este programa irá**

1. receber o NOME e a IDADE do cliente, como uma ENTRADA de dedados.
2. Irá PROCESSAR essa entrada de dados no IF+ELSE, que irá decidir uma resposta.
3. E resultará em uma SAÍDA de dados, que ira dizer se TEM ou NÃO TEM o desconto.

NOTA DIDÁTICA: A instrução int() antes do input serve apenas para avisar o computador que a resposta da idade deve ser tratada como um número inteiro, e não aceitar texto.
