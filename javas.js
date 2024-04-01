document.addEventListener("DOMContentLoaded", function() {
    const checkbox1 = document.getElementById("topping1");
    const checkbox2 = document.getElementById("topping2");
    const checkbox3 = document.getElementById("topping3");
    const h4Element = document.querySelector("h4");

    // Función para actualizar el contenido del h4 con los toppings seleccionados
    function actualizarH4() {
        let textoExistente = h4Element.textContent;
        let nuevoTexto = "Pan";

        if (checkbox3.checked) {
            nuevoTexto += ", Doble Carne";
        } else{
            nuevoTexto += ", Carne"
        }

        if (checkbox1.checked) {
            nuevoTexto += ", Salsa Tartara";
        }

        if (checkbox2.checked) {
            nuevoTexto += ", Salsa Piña";
        }
        

        h4Element.textContent =  nuevoTexto;
    }

    // Actualizar el contenido del h4 al cargar la página
    actualizarH4();

    // Escuchar los cambios en los checkboxes y actualizar el h4
    checkbox1.addEventListener("change", actualizarH4);
    checkbox2.addEventListener("change", actualizarH4);
    checkbox3.addEventListener("change", actualizarH4);
});
