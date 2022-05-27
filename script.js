var click = 0;
var time = 0;
var color;
var mytime = 10000;
var userinput = 10;

function confirmer(){
  userinput = document.getElementById("inputinput").value;
  document.getElementById("inputinput").disabled = true;
  if (userinput=="") {
    userinput = 10;
  }
  if (Number.isInteger(mytime)==true && mytime>0) {
    mytime = userinput+"000";
  }
}

function clicker(){
  click++;
  colorer();
  document.getElementById('clickers').innerHTML = "Click: "+click;
  if (time==0) {
    timer()
    time=1;
  }
}


function timer(){
  setTimeout(function(){
    cps = click/userinput;
    document.getElementById("btn").disabled = true;
    document.getElementById('clickers').innerHTML = "Your CPS: "+cps;
}, mytime);
}

function colorer(){
  document.getElementById("btn").style.background='#'+(Math.floor(Math.random() * 999999) + 100000);
}
