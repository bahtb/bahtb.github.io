var input;
var random;
var proba = 0;
var clr = 1;

function btn(){
  input = document.getElementById('writ').value
  if (input != " ") {
    color()
    proba = proba +1;
    check()
  }
}

function check(){

  if (random>input) {
    document.getElementById("opis").innerHTML = "Liczba jest za mała"
  }

  if (random<input) {
    document.getElementById("opis").innerHTML = "Liczba jest za duża"
  }

  if (input==random) {
    document.getElementById("opis").innerHTML = "Zgadłeś przy "+(proba)+" próbie"
    document.getElementById("btn").disabled = true;
    document.getElementById("writ").disabled = true;

  }
}

window.onload = function(e){
  document.getElementById("writ").value = " "
  random = Math.floor(Math.random() * 100);
  console.log(random);
}

function color(){
  clr = clr+1;
  if (clr==3) {
    clr =1
  }

  if (clr==1) {
    document.getElementById("opis").style.color = '#26989C';
  }

  if (clr==2) {
    document.getElementById("opis").style.color = '#B70000';
  }
}
