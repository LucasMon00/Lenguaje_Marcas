// const miTitulo = document.querySelector("h1");
// miTitulo.textContent = "¡Hola mundo!";

let nombreDeLaVariable = "Bob";

let helado = "vainilla";
if (helado === "chocolate") {
  alert("¡Sí, amo el helado de chocolate!");
} else {
  alert("Awwww, pero mi favorito es el de chocolate...");
}

function multiplica(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
}

let res=0;
let num1=5;
let num2=8;
res=multiplica(5,8);
alert("El resultado de multiplicar " + num1 + " y " + num2 + " es " + res)

document.querySelector("html").onclick = function () {
    alert("¡Ouch! ¡Deja de pincharme!");
  };

let miLista = document.querySelector("html");
miLista.onclick = function () {alert("Aixo es la llista")};

let miImage = document.querySelector("img");
miImage.onclick = function () {
  let miSrc = miImage.getAttribute("src");
  if (miSrc === "images/firefox-icon.png") {
    miImage.setAttribute("src", "images/firefox2.png");
  } else {
    miImage.setAttribute("src", "images/firefox-icon.png");
  }
};

let miBoton = document.querySelector("button");
let miTitulo = document.querySelector("h1");

function estableceNombreUsuario() {
    let miNombre = prompt("Por favor, ingresa tu nombre.");
    localStorage.setItem("nombre", miNombre);
    miTitulo.textContent = "Mozilla es genial," + miNombre;
  }

if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Mozilla es genial," + nombreAlmacenado;
}

miBoton.onclick = function () {
    estableceNombreUsuario();
  };

