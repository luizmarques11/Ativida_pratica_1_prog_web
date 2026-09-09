const casas = document.querySelectorAll(".casa");
const botaoIniciar = document.getElementById("botao-iniciar");
const seletorQuantidadeMinas = document.getElementById("quantidade-minas");
const mensagem = document.getElementById("mensagem");

let casasComMinas = [];
let jogoAtivo = false;

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

    const quantidadeMinas = Number(seletorQuantidadeMinas.value);

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
    } else {
        casa.textContent = "💎";
    }
}