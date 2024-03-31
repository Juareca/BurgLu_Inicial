document.addEventListener("DOMContentLoaded", function() {
    const checkbox1 = document.getElementById("topping1");
    const checkbox2 = document.getElementById("topping2");
    const checkbox3 = document.getElementById("topping3");
    const divImagenes = document.querySelector(".imagenes");

    checkbox1.addEventListener("change", function() {
        const textoExistente1 = divImagenes.querySelector(".topping1-texto");
        if (checkbox1.checked) {
            if (!textoExistente1) {
                const nuevoTexto1 = document.createElement("p");
                nuevoTexto1.textContent = "Salsa Tartara";
                nuevoTexto1.classList.add("topping1-texto");
                divImagenes.appendChild(nuevoTexto1);
            }
        } else {
            if (textoExistente1) {
                divImagenes.removeChild(textoExistente1);
            }
        }
    });

    checkbox2.addEventListener("change", function() {
        const textoExistente2 = divImagenes.querySelector(".topping2-texto");
        if (checkbox2.checked) {
            if (!textoExistente2) {
                const nuevoTexto2 = document.createElement("p");
                nuevoTexto2.textContent = "Salsa Piña";
                nuevoTexto2.classList.add("topping2-texto");
                divImagenes.appendChild(nuevoTexto2);
            }
        } else {
            if (textoExistente2) {
                divImagenes.removeChild(textoExistente2);
            }
        }
    });

    checkbox3.addEventListener("change", function() {
        const textoExistente3 = divImagenes.querySelector(".topping3-texto");
        if (checkbox3.checked) {
            if (!textoExistente3) {
                const nuevoTexto3 = document.createElement("p");
                nuevoTexto3.textContent = "Carne";
                nuevoTexto3.classList.add("topping3-texto");
                divImagenes.appendChild(nuevoTexto3);
            }
        } else {
            if (textoExistente3) {
                divImagenes.removeChild(textoExistente3);
            }
        }
    });
});
