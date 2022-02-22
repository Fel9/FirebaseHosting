function f(numero) {
  document.getElementById("texto").innerHTML = "";
  document.getElementById("moedas").innerHTML = "";

  var um = 1;
  var counter = 0;
  numero /= 100;

  while (Math.abs(numero - um) > Math.abs(numero - um / 2)) {
    um /= 2;
    counter++;
    novoImg = document.createElement("img");
    novoImg.setAttribute("src", "./img/moeda.gif");
    novoImg.setAttribute("class", "moeda");
    novoImg.setAttribute("alt", `moeda ${counter}`);
    document.getElementById("moedas").appendChild(novoImg);
  }
}

var modo = 0;

function modoNoturno() {
  if (modo == 0) {
    document.querySelector("html").style.filter = "invert(100%)";
    modo++;
  } else {
    document.querySelector("html").style.filter = "invert(0%)";
    modo -= 1;
  }
}
