var number;
var count =0;

function number1() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("coinNumber1");
    ctx.drawImage(img, 10, 10, 280, 140);
}

function number2() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("coinNumber2");
    ctx.drawImage(img, 10, 10, 280, 140);
}

function flipcoin(){
    if(count == 1){
        document.getElementById("descript").style.color = "blue";
    }
    if(count == 2){
        document.getElementById("descript").style.color = "red";
        count = 0;
    }
    number = Math.floor(Math.random() * 2);
    console.log(number);
    if(number == 0){
        number1();
    }
    if(number == 1){
        number2();
    }
    count++;
}