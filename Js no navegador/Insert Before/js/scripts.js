let novoElemento = document.createElement("p");
let texto = document.createTextNode("Algum texto");

novoElemento.appendChild(texto);

let elementoAlvo = document.querySelector("#Titulo-principal");
let elementoPai = document.querySelector("#container-principal");

elementoPai.insertBefore(novoElemento, elementoAlvo);