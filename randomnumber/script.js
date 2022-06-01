var randNumber;
var fromI;
var toI;


function getRandNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function randombtn(){
    fromI = document.getElementById("number1").value;
    toI = document.getElementById("number2").value;
    randNumber = getRandNumber(fromI,toI);
    console.log(randNumber);
    document.getElementById("result").innerHTML = randNumber;
}

