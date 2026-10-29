const pasion = document.getElementById("pasion");
const imagen = document.getElementById("imagenPasion");


pasion.addEventListener("change", function () {

if (pasion.value === "ajedrez") {
imagen.src = "https://images.unsplash.com/photo-1586165368502-1bad197a6461?w=500";
imagen.alt = "Tablero de ajedrez";


}
else if (pasion.value === "pinPon") {
imagen.src = "https://images.unsplash.com/photo-1611251135345-18c56206b863?w=500";
imagen.alt = "Juego de ping-pong";
}
else if (pasion.value === "series") {
imagen.src = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500";
imagen.alt = "Entretenimiento y series";

}
else {
respuesta.textContent("elige una opcion")
}
imagen.style.display = "block";
});



const numero = document.getElementById("numero");
const resultado = document.getElementById("resultado");
const numeroFavorito = 11;

numero.addEventListener("input", function() {
const valor = Number(numero.value);

if (numero.value === "") {
resultado.textContent = "Escribe un número primero.";
} 
else if (valor === numeroFavorito) {
resultado.textContent = "Correcto, Adivinaste mi número.";
} 
else if (valor < numeroFavorito) {
resultado.textContent = "Mi número es más alto.";
} 
else {
resultado.textContent = "Mi número es más bajo.";
}
});


let botonInt = document.getElementById("click");

botonInt.onclick = function(){
    alert("Hola profe mucho gusto")
}





