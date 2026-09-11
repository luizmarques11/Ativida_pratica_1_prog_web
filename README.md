# Mines

Jogo desenvolvido como atividade prática da disciplina de Programação Web.

O objetivo do jogo é encontrar todas as casas seguras do tabuleiro sem clicar em uma mina.

## Como jogar

1. Escolha a quantidade de minas.
2. Clique em **Iniciar jogo**.
3. Escolha uma das casas do tabuleiro.
4. Ao encontrar uma casa segura, ela será revelada e a pontuação aumentará.
5. Caso uma mina seja encontrada, a partida termina e todas as minas são reveladas.
6. O jogador vence quando consegue abrir todas as casas que não possuem minas.

## Funcionamento

O tabuleiro possui 25 casas organizadas em uma grade de 5 por 5.

No início de cada partida, as minas são distribuídas aleatoriamente entre as casas de acordo com a quantidade escolhida pelo jogador.

As casas possuem três estados principais:

* Fechada: ainda não foi selecionada.
* Segura: foi aberta e não possui mina.
* Mina: contém uma bomba.

Cada casa segura encontrada adiciona um ponto à pontuação do jogador.

## Tecnologias utilizadas

O projeto foi desenvolvido utilizando apenas:

* HTML
* CSS
* JavaScript

Não foram utilizadas bibliotecas ou frameworks externos.

## Como executar

O jogo não necessita de instalação.

Para executar localmente:

1. Faça o download ou clone este repositório.
2. Abra o arquivo `index.html` em um navegador.

Também é possível acessar diretamente a versão publicada pelo GitHub Pages.

## Versão publicada

GitHub Pages:

https://luizmarques11.github.io/Ativida_pratica_1_prog_web/

## Estrutura do projeto

```text
Atividade1/
├── index.html
├── estilo.css
├── script.js
├── README.md
└── LICENSE
```

## Informações da atividade

```json
{
  "nome": "Mines",
  "descricao": "Jogo em que o jogador deve encontrar todas as casas seguras de um tabuleiro sem selecionar uma casa que contenha uma mina.",
  "autores": "Luiz Felipe de Souza Marques",
  "turma": "14B"
}
```

## Licença

Este projeto está licenciado sob a licença MIT.
