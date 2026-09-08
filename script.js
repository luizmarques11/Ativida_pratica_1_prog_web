const casas = document.querySelectorAll(".casa");

casas.forEach(function (casa) {
    casa.addEventListener("click", function () {
        console.log("Casa clicada:", casa.id);
    });
});