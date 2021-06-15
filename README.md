# Cifra de César

## 1. Prefácio

Cifrar significa codificar. A [cifra de
César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar) é um dos primeiros
tipos de criptografias conhecidas na história. O imperador romano Júlio César
utilizava essa cifra para enviar ordens secretas aos seus generais no campo de
batalha.

![caeser-cipher](https://user-images.githubusercontent.com/11894994/60990999-07ffdb00-a320-11e9-87d0-b7c291bc4cd1.png)

A cifra de César é uma das técnicas mais simples de cifrar uma mensagem. É um
tipo de cifra por substituição, em que cada letra do texto original é
substituida por outra que se encontra há um número fixo de posições
(deslocamento) mais a frente do mesmo alfabeto.

Por exemplo se usarmos o deslocamento (_offset_) de 3 posições:

* Alfabeto sem cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto com cifra:  D E F G H I J K L M N O P Q R S T U V W X Y Z A B C
* A letra A será D
* A palavra CASA será FDVD

Atualmente todas as cifras de substituição alfabética simples, são decifradas
com facilidade e não oferecem muita segurança na comunicação, mas a cifra de César
muitas vezes pode fazer parte de um sistema mais complexo de criptografia, como
a cifra de Vigenère, e tem aplicação no sistema ROT13.

## 2. Resumo
A aplicação web "Um Lugar Seguro" tem o objetivo de ser uma ferramenta em que uma mensagem inserida seja codificada a partir de uma chave de deslocamento e, da mesma maneira, ser decodificada, utilizando a Cifra de César como premissa.

## 3. Tema
Com base no aumento dos casos de violência doméstica no Brasil em decorrência da pandemia de COVID-19, surge a necessidade de uma ferramenta que incentive as vítimas a denunciarem os abusos vividos em tal contexto.
Esta ferramenta fornece ao usuário a capacidade de redigir uma mensagem pessoal com o intuito de compartilhá-la com pessoas próximas que podem ajudar nessas circunstâncias, cuja interpretação poderá ser realizada somente por aqueles que possuem a chave de deslocamento selecionada pelo usuário, garantindo assim, a privacidade da qual o usuário procura.

## 4. Como funciona?
A interface é composta por um texto introdutório, duas caixas para inserir a mensagem, uma para codificar e outra para decodificar, duas caixas com o resultado final da codificação/decodifição e duas caixas para a chave de deslocamento.
O usuário pode redigir sua mensagem a ser codificada, selecionar a chave de deslocamento e clicar no botão "Codificar" para visualizar o resultado ao lado.
Ele também pode inserir uma mensagem já codificada, selecionar a chave na qual o texto foi codificado e clicar no botão "Decodificar" para receber o conteúdo da mensagem.

## 5. Conteúdos aprendidos

### HTML e CSS

* [x] [Uso de HTML semântico.](https://developer.mozilla.org/pt-BR/docs/Glossario/Semantica#Sem%C3%A2ntica_em_HTML)
* [x] Uso de seletores de CSS.

### DOM

* [x] Uso de seletores do DOM.
* [x] Manipular eventos do DOM.
* [x] [Manipulação dinâmica do DOM.](https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [x] Manipulação de strings.
* [x] Uso de condicionais (if-else | switch | operador ternário)
* [x] Uso de laços _(loops)_ (for | for..in | for..of | while)
* [x] Uso de funções (parâmetros | argumentos | valor de retorno)
* [x] Declaração correta de variáveis (const & let)

### Testing

* [x] [Teste unitário.](https://jestjs.io/docs/pt-BR/getting-started)

### Estrutura do código e guia de estilo

* [x] Organizar e dividir o código em módulos (Modularização)
* [x] Uso de identificadores descritivos (Nomenclatura | Semântica)
* [x] Uso de linter (ESLINT)

### Git e GitHub

* [x] Uso de comandos de git (add | commit | pull | status | push)
* [x] Gerenciamento de repositorios de GitHub (clone | fork | gh-pages)

### UX

* [x] Desenhar a aplicação pensando e entendendo o usuário.
* [ ] Criar protótipos para obter feedback e iterar.
* [x] Aplicar os princípios de desenho visual (contraste, alinhamento, hierarquia)