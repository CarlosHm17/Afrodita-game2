const bootnU = document.getElementById("botonU")
const bootnD = document.getElementById("botonD")
const bootnT = document.getElementById("botonT")

botonU.addEventListener("click", resultadoUno);

function resultadoUno() {
    botonU.classList.add("botonP");
    botonD.classList.add("botonS");
    botonT.classList.add("botonT");
}

botonD.addEventListener("click", resultadoDos);

function resultadoDos() {
    botonU.classList.add("botonS");
    botonD.classList.add("botonP");
    botonT.classList.add("botonT");
}

botonT.addEventListener("click", resultadoTres);

function resultadoTres() {
    botonU.classList.add("botonP");
    botonD.classList.add("botonT");
    botonT.classList.add("botonS");
}