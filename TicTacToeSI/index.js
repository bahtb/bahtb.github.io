var player = 0
var during = true;
var w1;
var w2;
var w3;
var w4;
var w5;
var w6;
var w7;
var w8;
var w9;

function winnerRed(){
  alert("Wygrał gracz: X");
  document.getElementById("gracz").innerHTML = 'Winner: X';
  document.getElementById("gracz").style.color = "#B60000";
}

function winnerBlue(){
  alert("Wygrał gracz: O");
  document.getElementById("gracz").innerHTML = 'Winner: O';
  document.getElementById("gracz").style.color = "#0062B3";
}

function zSI(){
  w1 = document.getElementById("1").innerHTML
  w2 = document.getElementById("2").innerHTML
  w3 = document.getElementById("3").innerHTML
  w4 = document.getElementById("4").innerHTML
  w5 = document.getElementById("5").innerHTML
  w6 = document.getElementById("6").innerHTML
  w7 = document.getElementById("7").innerHTML
  w8 = document.getElementById("8").innerHTML
  w9 = document.getElementById("9").innerHTML

  if(player == 1 && w5==" "){
    bt5()
  }

  if(w1 =="X" && w4 =="X" && player ==1 && w7 == " "){
    bt7()
  }
  if(w4 =="X" && w7 =="X" && player ==1 && w1 == " "){
    bt1()
  }
  if(w1 =="X" && w7 =="X" && player ==1 && w4 == " "){
    bt4()
  }

  if(w2 =="X" && w5 =="X" && player ==1 && w8 == " "){
    bt8()
  }
  if(w5 =="X" && w8 =="X" && player ==1 && w2 == " "){
    bt2()
  }
  if(w2 =="X" && w8 =="X" && player ==1 && w5 == " "){
    bt5()
  }

  if(w3 =="X" && w6 =="X" && player ==1 && w9 == " "){
    bt9()
  }
  if(w6 =="X" && w9 =="X" && player ==1 && w3 == " "){
    bt3()
  }
  if(w3 =="X" && w9 =="X" && player ==1 && w6 == " "){
    bt6()
  }

  if(w1 =="X" && w2 =="X" && player ==1 && w3 == " "){
    bt3()
  }
  if(w2 =="X" && w3 =="X" && player ==1 && w1 == " "){
    bt1()
  }
  if(w1 =="X" && w3 =="X" && player ==1 && w2 == " "){
    bt2()
  }

  if(w4 =="X" && w5 =="X" && player ==1 && w6 == " "){
    bt6()
  }
  if(w5 =="X" && w6 =="X" && player ==1 && w4 == " "){
    bt4()
  }
  if(w4 =="X" && w6 =="X" && player ==1 && w5 == " "){
    bt5()
  }

  if(w7 =="X" && w8 =="X" && player ==1 && w9 == " "){
    bt9()
  }
  if(w8 =="X" && w9 =="X" && player ==1 && w7 == " "){
    bt7()
  }
  if(w7 =="X" && w9 =="X" && player ==1 && w8 == " "){
    bt8()
  }

  if(w1 =="X" && w5 =="X" && player ==1 && w9 == " "){
    bt9()
  }
  if(w5 =="X" && w9 =="X" && player ==1 && w1 == " "){
    bt1()
  }
  if(w1 =="X" && w9 =="X" && player ==1 && w5 == " "){
    bt5()
  }

  if(w3 =="X" && w5 =="X" && player ==1 && w7 == " "){
    bt7()
  }
  if(w5 =="X" && w7 =="X" && player ==1 && w3 == " "){
    bt3()
  }
  if(w3 =="X" && w7 =="X" && player ==1 && w5 == " "){
    bt5()
  }




  if(w1 =="O" && w4 =="O" && player ==1 && w7 == " "){
    bt7()
  }
  if(w4 =="O" && w7 =="O" && player ==1 && w1 == " "){
    bt1()
  }
  if(w1 =="O" && w7 =="O" && player ==1 && w4 == " "){
    bt4()
  }

  if(w2 =="O" && w5 =="O" && player ==1 && w8 == " "){
    bt8()
  }
  if(w5 =="O" && w8 =="O" && player ==1 && w2 == " "){
    bt2()
  }
  if(w2 =="O" && w8 =="O" && player ==1 && w5 == " "){
    bt5()
  }

  if(w3 =="O" && w6 =="O" && player ==1 && w9 == " "){
    bt9()
  }
  if(w6 =="O" && w9 =="O" && player ==1 && w3 == " "){
    bt3()
  }
  if(w3 =="O" && w9 =="O" && player ==1 && w6 == " "){
    bt6()
  }

  if(w1 =="O" && w2 =="O" && player ==1 && w3 == " "){
    bt3()
  }
  if(w2 =="O" && w3 =="O" && player ==1 && w1 == " "){
    bt1()
  }
  if(w1 =="O" && w3 =="O" && player ==1 && w2 == " "){
    bt2()
  }

  if(w4 =="O" && w5 =="O" && player ==1 && w6 == " "){
    bt6()
  }
  if(w5 =="O" && w6 =="O" && player ==1 && w4 == " "){
    bt4()
  }
  if(w4 =="O" && w6 =="O" && player ==1 && w5 == " "){
    bt5()
  }

  if(w7 =="O" && w8 =="O" && player ==1 && w9 == " "){
    bt9()
  }
  if(w8 =="O" && w9 =="O" && player ==1 && w7 == " "){
    bt7()
  }
  if(w7 =="O" && w9 =="O" && player ==1 && w8 == " "){
    bt8()
  }

  if(w1 =="O" && w5 =="O" && player ==1 && w9 == " "){
    bt9()
  }
  if(w5 =="O" && w9 =="O" && player ==1 && w1 == " "){
    bt1()
  }
  if(w1 =="O" && w9 =="O" && player ==1 && w5 == " "){
    bt5()
  }

  if(w3 =="O" && w5 =="O" && player ==1 && w7 == " "){
    bt7()
  }
  if(w5 =="O" && w7 =="O" && player ==1 && w3 == " "){
    bt3()
  }
  if(w3 =="O" && w7 =="O" && player ==1 && w5 == " "){
    bt5()
  }





  if(player == 1 && w1=="O" && w9=="O" && w4 ==" "){
    bt4()
  }

  if(player == 1 && w2=="O" && w1 ==" "){
    bt1()
  }

  if(player == 1 && w4=="O" && w2 ==" "){
    bt7()
  }

  if(player == 1 && w5=="O" && w1 ==" "){
    bt1()
  }

  if(player == 1 && w6=="O" && w3 ==" "){
    bt3()
  }

  if(player == 1 && w7=="O" && w4 ==" "){
    bt4()
  }

  if(player == 1 && w7=="O" && w6 ==" "){
    bt6()
  }

  if(player == 1 && w8=="O" && w6 ==" "){
    bt6()
  }

  if(player == 1 && w8=="O" && w7 ==" "){
    bt7()
  }

  if(player == 1 && w9=="O" && w4 ==" "){
    bt4()
  }

  if(player == 1 && w9=="O" && w6 ==" "){
    bt6()
  }




  if(player == 1 && w1 ==" "){
    bt1()
  }
  if(player == 1 && w2 ==" "){
    bt2()
  }
  if(player == 1 && w3 ==" "){
    bt3()
  }
  if(player == 1 && w4 ==" "){
    bt4()
  }
  if(player == 1 && w5 ==" "){
    bt5()
  }
  if(player == 1 && w6 ==" "){
    bt6()
  }
  if(player == 1 && w7 ==" "){
    bt7()
  }
  if(player == 1 && w8 ==" "){
    bt8()
  }
  if(player == 1 && w9 ==" "){
    bt9()
  }

}

function allDisable(){
  document.getElementById("bt1").disabled = true;
  document.getElementById("bt2").disabled = true;
  document.getElementById("bt3").disabled = true;
  document.getElementById("bt4").disabled = true;
  document.getElementById("bt5").disabled = true;
  document.getElementById("bt6").disabled = true;
  document.getElementById("bt7").disabled = true;
  document.getElementById("bt8").disabled = true;
  document.getElementById("bt9").disabled = true;

  during = false;
}


function win(){
  if(during == true){
  w1 = document.getElementById("1").innerHTML
  w2 = document.getElementById("2").innerHTML
  w3 = document.getElementById("3").innerHTML
  w4 = document.getElementById("4").innerHTML
  w5 = document.getElementById("5").innerHTML
  w6 = document.getElementById("6").innerHTML
  w7 = document.getElementById("7").innerHTML
  w8 = document.getElementById("8").innerHTML
  w9 = document.getElementById("9").innerHTML


  if (w1 =="O" && w2 =="O" && w3 =="O") {
    allDisable()
    winnerBlue()
  }

  if (w4 =="O" && w5 =="O" && w6 =="O") {
    allDisable()
    winnerBlue()
  }

  if (w7 =="O" && w8 =="O" && w9 =="O") {
    allDisable()
    winnerBlue()
  }

  if (w1 =="O" && w4 =="O" && w7 =="O") {
    allDisable()
    winnerBlue()
  }

  if (w2 =="O" && w5 =="O" && w8 =="O") {
    allDisable()
    winnerBlue()
  }

  if (w3 =="O" && w6 =="O" && w9 =="O") {
    allDisable()
    winnerBlue()
  }

  if (w1 =="O" && w5 =="O" && w9 =="O") {
    allDisable()
    winnerBlue()
  }

  if (w3 =="O" && w5 =="O" && w7 =="O") {
    allDisable()
    winnerBlue()
  }

  if (w1 =="X" && w2 =="X" && w3 =="X") {
    allDisable()
    winnerRed()
  }

  if (w4 =="X" && w5 =="X" && w6 =="X") {
    allDisable()
    winnerRed()
  }

  if (w7 =="X" && w8 =="X" && w9 =="X") {
    allDisable()
    winnerRed()
  }

  if (w1 =="X" && w4 =="X" && w7 =="X") {
    allDisable()
    winnerRed()
  }

  if (w2 =="X" && w5 =="X" && w8 =="X") {
    allDisable()
    winnerRed()
  }

  if (w3 =="X" && w6 =="X" && w9 =="X") {
    allDisable()
    winnerRed()
  }

  if (w1 =="X" && w5 =="X" && w9 =="X") {
    allDisable()
    winnerRed()
  }

  if (w3 =="X" && w5 =="X" && w7 =="X") {
    allDisable()
    winnerRed()
  }
  }
}


function whoplayer(){
  if (player ==1) {
    document.getElementById("gracz").innerHTML = 'Player: X';
    document.getElementById("gracz").style.color = "#B60000";
  }

  if (player ==2) {
    document.getElementById("gracz").innerHTML = 'Player: O';
    document.getElementById("gracz").style.color = "#0062B3";
  }
  if (player == 0) {
    document.getElementById("gracz").innerHTML = 'Player: O';
    document.getElementById("gracz").style.color = "#0062B3";
  }
}

function who(){
  player = player +1;
  if (player == 3) {
    player = 1
  }
  console.log(player);
}


function bt1() {
  who()
  whoplayer()
  


  console.log(player);
  document.getElementById("bt1").disabled = true;

  document.getElementById("bt1").classList.remove('button');

  if (player ==1) {
    document.getElementById("1").innerHTML = 'O';
    document.getElementById("bt1").classList.add('playerO');
  }

  if (player ==2) {
    document.getElementById("1").innerHTML = 'X';
    document.getElementById("bt1").classList.add('playerX');
  }
  zSI()
  win()
}


function bt2() {
  who()
  whoplayer()

  console.log(player);
  document.getElementById("bt2").disabled = true;

  document.getElementById("bt2").classList.remove('button');

  if (player ==1) {
    document.getElementById("2").innerHTML = 'O';
    document.getElementById("bt2").classList.add('playerO');
  }

  if (player ==2) {
    document.getElementById("2").innerHTML = 'X';
    document.getElementById("bt2").classList.add('playerX');
  }
  zSI()
  win()
}


function bt3() {
  who()
  whoplayer()

  console.log(player);
  document.getElementById("bt3").disabled = true;

  document.getElementById("bt3").classList.remove('button');

  if (player ==1) {
    document.getElementById("3").innerHTML = 'O';
    document.getElementById("bt3").classList.add('playerO');
  }

  if (player ==2) {
    document.getElementById("3").innerHTML = 'X';
    document.getElementById("bt3").classList.add('playerX');
  }
  zSI()
  win()
}

function bt4() {
  who()
  whoplayer()

  console.log(player);
  document.getElementById("bt4").disabled = true;

  document.getElementById("bt4").classList.remove('button');

  if (player ==1) {
    document.getElementById("4").innerHTML = 'O';
    document.getElementById("bt4").classList.add('playerO');
  }

  if (player ==2) {
    document.getElementById("4").innerHTML = 'X';
    document.getElementById("bt4").classList.add('playerX');
  }
  zSI()
  win()
}

function bt5() {
  who()
  whoplayer()

  console.log(player);
  document.getElementById("bt5").disabled = true;

  document.getElementById("bt5").classList.remove('button');

  if (player ==1) {
    document.getElementById("5").innerHTML = 'O';
    document.getElementById("bt5").classList.add('playerO');
  }

  if (player ==2) {
    document.getElementById("5").innerHTML = 'X';
    document.getElementById("bt5").classList.add('playerX');
  }
  zSI()
  win()
}

function bt6() {
  who()
  whoplayer()

  console.log(player);
  document.getElementById("bt6").disabled = true;

  document.getElementById("bt6").classList.remove('button');

  if (player ==1) {
    document.getElementById("6").innerHTML = 'O';
    document.getElementById("bt6").classList.add('playerO');
  }

  if (player ==2) {
    document.getElementById("6").innerHTML = 'X';
    document.getElementById("bt6").classList.add('playerX');
  }
  zSI()
  win()
}

function bt7() {
  who()
  whoplayer()

  console.log(player);
  document.getElementById("bt7").disabled = true;

  document.getElementById("bt7").classList.remove('button');

  if (player ==1) {
    document.getElementById("7").innerHTML = 'O';
    document.getElementById("bt7").classList.add('playerO');
  }

  if (player ==2) {
    document.getElementById("7").innerHTML = 'X';
    document.getElementById("bt7").classList.add('playerX');
  }
  zSI()
  win()
}

function bt8() {
  who()
  whoplayer()

  console.log(player);
  document.getElementById("bt8").disabled = true;

  document.getElementById("bt8").classList.remove('button');

  if (player ==1) {
    document.getElementById("8").innerHTML = 'O';
    document.getElementById("bt8").classList.add('playerO');
  }

  if (player ==2) {
    document.getElementById("8").innerHTML = 'X';
    document.getElementById("bt8").classList.add('playerX');
  }
  zSI()
  win()
}

function bt9() {
  who()
  whoplayer()

  console.log(player);
  document.getElementById("bt9").disabled = true;

  document.getElementById("bt9").classList.remove('button');

  if (player ==1) {
    document.getElementById("9").innerHTML = 'O';
    document.getElementById("bt9").classList.add('playerO');
  }

  if (player ==2) {
    document.getElementById("9").innerHTML = 'X';
    document.getElementById("bt9").classList.add('playerX');
  }
  zSI()
  win()
}