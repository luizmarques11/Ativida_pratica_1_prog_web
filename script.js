const casas = document.querySelectorAll(".casa");
const botaoIniciar = document.getElementById("botao-iniciar");
const seletorQuantidadeMinas = document.getElementById("quantidade-minas");
const mensagem = document.getElementById("mensagem");
const elementoPontos = document.getElementById("pontos");

let casasComMinas = [];
let jogoAtivo = false;
let pontos = 0;
let quantidadeMinas = 0;

casas.forEach(function (casa) {
    casa.addEventListener("click", function () {
        verificarCasa(casa);
    });
});

botaoIniciar.addEventListener("click", function () {
    iniciarJogo();
});

function iniciarJogo() {
    jogoAtivo = true;
    pontos = 0;

    quantidadeMinas = Number(seletorQuantidadeMinas.value);

    elementoPontos.textContent = pontos;

    limparTabuleiro();
    sortearMinas();

    mensagem.textContent = "Jogo iniciado!";
}

function limparTabuleiro() {
    casas.forEach(function (casa) {
        casa.textContent = "";
        casa.classList.remove("aberta");
    });
}

function sortearMinas() {
    casasComMinas = [];

    while (casasComMinas.length < quantidadeMinas) {
        const numeroCasa = Math.floor(Math.random() * 25) + 1;
        const idCasa = `casa-${numeroCasa}`;

        if (!casasComMinas.includes(idCasa)) {
            casasComMinas.push(idCasa);
        }
    }

    console.log("Casas com minas:", casasComMinas);
}

function verificarCasa(casa) {
    if (!jogoAtivo) {
        return;
    }

    if (casa.classList.contains("aberta")) {
        return;
    }

    casa.classList.add("aberta");

    if (casasComMinas.includes(casa.id)) {
        casa.textContent = "💣";

        jogoAtivo = false;

        mensagem.textContent = "Você encontrou uma mina!";

        revelarMinas();
    } else {
        casa.textContent = "💎";

        pontos++;

        elementoPontos.textContent = pontos;

        verificarVitoria();
    }
}

function verificarVitoria() {
    const quantidadeCasasSeguras = 25 - quantidadeMinas;

    if (pontos === quantidadeCasasSeguras) {
        jogoAtivo = false;

        mensagem.textContent = "Você venceu!";
    }
}

function revelarMinas() {
    casas.forEach(function (casa) {
        if (casasComMinas.includes(casa.id)) {
            casa.textContent = "💣";
        }
    });
}