const casas = document.querySelectorAll(".casa");
const botaoIniciar = document.getElementById("botao-iniciar");
const seletorQuantidadeMinas = document.getElementById("quantidade-minas");

let casasComMinas = [];

casas.forEach(function (casa) {
    casa.addEventListener("click", function () {
        verificarCasa(casa);
    });
});

botaoIniciar.addEventListener("click", function () {
    sortearMinas();
});

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
    if (casasComMinas.includes(casa.id)) {
        casa.textContent = "💣";
    } else {
        casa.textContent = "💎";
    }
}