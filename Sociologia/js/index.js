function f(numero){
  document.getElementById('texto').innerHTML = ''
  document.getElementById('div').innerHTML = ''
  var um = 1
  var counter = 0
  var imagens = document.getElementsByClassName('moedas')
  numero /= 100
  newItem = document.createTextNode('Texto de teste')
 
  // document.getElementById('div').appendChild(novoImg)
  
  while(Math.abs(numero - um) > Math.abs(numero - um/2)){
    um /= 2
    counter ++ 
    novoImg = document.createElement('img')
    novoImg.setAttribute("src", "/img/moeda.gif")
    novoImg.setAttribute("class", "moeda")
    document.getElementById('div').appendChild(novoImg)    
    // document.getElementById('texto').appendChild("Esta estimativa tem margem de erro de " + 100 * 1 / Math.pow(2, counter)-numero + "%, com o valor real sendo " + numero)
  }
}

var modo = 0
function modoNoturno(){
  if(modo == 0){
    document.querySelector('html').style.filter = 'invert(100%)'
    modo ++
  } else{
    document.querySelector('html').style.filter = 'invert(0%)'
    modo -= 1
  }
}