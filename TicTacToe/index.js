var player = 0;
whoplayer()


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
}


function win(){
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
    alert("Wygrał gracz: O" );
    allDisable()
  }

  if (w4 =="O" && w5 =="O" && w6 =="O") {
    alert("Wygrał gracz: O" );
    allDisable()
  }

  if (w7 =="O" && w8 =="O" && w9 =="O") {
    alert("Wygrał gracz: O" );
    allDisable()
  }

  if (w1 =="O" && w4 =="O" && w7 =="O") {
    alert("Wygrał gracz: O" );
    allDisable()
  }

  if (w2 =="O" && w5 =="O" && w8 =="O") {
    alert("Wygrał gracz: O" );
    allDisable()
  }

  if (w3 =="O" && w6 =="O" && w9 =="O") {
    alert("Wygrał gracz: O" );
    allDisable()
  }

  if (w1 =="O" && w5 =="O" && w9 =="O") {
    alert("Wygrał gracz: O" );
    allDisable()
  }

  if (w3 =="O" && w5 =="O" && w7 =="O") {
    alert("Wygrał gracz: O" );
    allDisable()
  }

  if (w1 =="X" && w2 =="X" && w3 =="X") {
    alert("Wygrał gracz: X" );
    allDisable()
  }

  if (w4 =="X" && w5 =="X" && w6 =="X") {
    alert("Wygrał gracz: X" );
    allDisable()
  }

  if (w7 =="X" && w8 =="X" && w9 =="X") {
    alert("Wygrał gracz: X" );
    allDisable()
  }

  if (w1 =="X" && w4 =="X" && w7 =="X") {
    alert("Wygrał gracz: X" );
    allDisable()
  }

  if (w2 =="X" && w5 =="X" && w8 =="X") {
    alert("Wygrał gracz: X" );
    allDisable()
  }

  if (w3 =="X" && w6 =="X" && w9 =="X") {
    alert("Wygrał gracz: X" );
    allDisable()
  }

  if (w1 =="X" && w5 =="X" && w9 =="X") {
    alert("Wygrał gracz: X" );
    allDisable()
  }

  if (w3 =="X" && w5 =="X" && w7 =="X") {
    alert("Wygrał gracz: X" );
    allDisable()
  }
}


function color() {
  clr = Math.floor(Math.random() * 900000) + 100000;
  clr2 = '#'+clr
  console.log(clr2);
  document.getElementById("text").style.color = (clr2);
}

function whoplayer(){
  if (player ==1) {
    document.getElementById("gracz").innerHTML = 'Player: X';
    document.getElementById("gracz").style.color = "red";
  }

  if (player ==2) {
    document.getElementById("gracz").innerHTML = 'Player: O';
    document.getElementById("p2").style.color = "blue";
  }
  if (player == 0) {
    document.getElementById("gracz").innerHTML = 'Player: O';
    document.getElementById("p2").style.color = "blue";
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
  win()
}