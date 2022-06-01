var inputUser;
var number1 = 0;
var number2 = 0;
var number3 = 0;
var number4 = 0;
var number5 = 0;
var number6 = 0;
var number7 = 0;
var number8 = 0;
var number9 = 0;
var number10 = 0;
var resultV;
var whatWhy;
var count = 1;

function LongAndSelect(){
  console.log("LongAndSelect")
  if (count ==10) {
    number10 = document.getElementById('inputResult').value;
    
  }
  if (count ==9) {
    number9 = document.getElementById('inputResult').value;

  }
  if (count ==8) {
    number8 = document.getElementById('inputResult').value;

  }
  if (count ==7) {
    number7 = document.getElementById('inputResult').value;

  }
  if (count ==6) {
    number6 = document.getElementById('inputResult').value;

  }
  if (count ==5) {
    number5 = document.getElementById('inputResult').value;
    
  }
  if (count ==4) {
    number4 = document.getElementById('inputResult').value;

  }
  if (count ==3) {
    number3 = document.getElementById('inputResult').value;

  }
  if (count ==2) {
    number2 = document.getElementById('inputResult').value;

  }
  if (count ==1) {
    number1 = document.getElementById('inputResult').value;
    
  }
  document.getElementById('inputResult').value = "";
  count++;
}


function plus1(){
  inputUser = document.getElementById('inputResult').value;
  inputUser = inputUser+"1";
  document.getElementById('inputResult').value = inputUser;
}


function plus2(){
  inputUser = document.getElementById('inputResult').value;
  inputUser = inputUser+"2";
  document.getElementById('inputResult').value = inputUser;
}


function plus3(){
  inputUser = document.getElementById('inputResult').value;
  inputUser = inputUser+"3";
  document.getElementById('inputResult').value = inputUser;
}


function plus4(){
  inputUser = document.getElementById('inputResult').value;
  inputUser = inputUser+"4";
  document.getElementById('inputResult').value = inputUser;
}


function plus5(){
  inputUser = document.getElementById('inputResult').value;
  inputUser = inputUser+"5";
  document.getElementById('inputResult').value = inputUser;
}


function plus6(){
  inputUser = document.getElementById('inputResult').value;
  inputUser = inputUser+"6";
  document.getElementById('inputResult').value = inputUser;
}


function plus7(){
  inputUser = document.getElementById('inputResult').value;
  inputUser = inputUser+"7";
  document.getElementById('inputResult').value = inputUser;
}


function plus8(){
  inputUser = document.getElementById('inputResult').value;
  inputUser = inputUser+"8";
  document.getElementById('inputResult').value = inputUser;
}


function plus9(){
  inputUser = document.getElementById('inputResult').value;
  inputUser = inputUser+"9";
  document.getElementById('inputResult').value = inputUser;
}


function plus0(){
  inputUser = document.getElementById('inputResult').value;
  inputUser = inputUser+"0";
  document.getElementById('inputResult').value = inputUser;
}


function plusM(){
  inputUser = inputUser.slice(0, -1)
  document.getElementById('inputResult').value = inputUser;
}


function multi(){
  LongAndSelect()

  whatWhy = 1;
}


function minus(){
  LongAndSelect()

  whatWhy = 2;
}


function plus(){
  LongAndSelect()

  whatWhy = 3;
}


function division(){
  LongAndSelect()

  whatWhy = 4;
}


function plusR(){
  
  LongAndSelect()
  count = 1;
  
  if (whatWhy == 1) {
    if ((number1*number2*number3*number4*number5*number6*number7*number8*number9*number10) !=0) {
      console.log("10");
      resultV = number1*number2*number3*number4*number5*number6*number7*number8*number9*number10;
      inputUser = "";
      document.getElementById('inputResult').value = resultV;
    }
    else if ((number1*number2*number3*number4*number5*number6*number7*number8*number9) !=0) {
      console.log("9");
      resultV = number1*number2*number3*number4*number5*number6*number7*number8*number9;
      inputUser = "";
      document.getElementById('inputResult').value = resultV;
    }
    else if ((number1*number2*number3*number4*number5*number6*number7*number8) !=0) {
      console.log("8");
      resultV = number1*number2*number3*number4*number5*number6*number7*number8;
      inputUser = "";
      document.getElementById('inputResult').value = resultV;
    }
    else if ((number1*number2*number3*number4*number5*number6*number7) !=0) {
      console.log("7");
      resultV = number1*number2*number3*number4*number5*number6*number7;
      inputUser = "";
      document.getElementById('inputResult').value = resultV;
    }
    else if ((number1*number2*number3*number4*number5*number6) !=0) {
      console.log("6");
      resultV = number1*number2*number3*number4*number5*number6;
      inputUser = "";
      document.getElementById('inputResult').value = resultV;
    }
    else if ((number1*number2*number3*number4*number5) !=0) {
      console.log("5");
      resultV = number1*number2*number3*number4*number5;
      inputUser = "";
      document.getElementById('inputResult').value = resultV;
    }
    else if ((number1*number2*number3*number4) != 0) {
      console.log("4");
      resultV = number1*number2*number3*number4;
      inputUser = "";
      document.getElementById('inputResult').value = resultV;
    }
    else if ((number1*number2*number3) != 0) {
      console.log("3");
      resultV = number1*number2*number3;
      inputUser = "";
      document.getElementById('inputResult').value = resultV;
    }
    else if ((number1*number2) != 0) {
      console.log("2");
      resultV = number1*number2;
      inputUser = "";
      document.getElementById('inputResult').value = resultV;
    }


  }
  if (whatWhy == 2) {
    resultV = number1-number2-number3-number4-number5-number6-number7-number8-number9-number10;
    inputUser = "";
    document.getElementById('inputResult').value = resultV;
  }
  if (whatWhy == 3) {
    resultV = +number1 + +number2 + +number3 + +number4 + +number5 + +number6 + +number7 + +number8 + +number9 + +number10;
    inputUser = "";
    document.getElementById('inputResult').value = resultV;
  }
  if (whatWhy == 4) {
    if ((number1/number2/number3/number4/number5/number6/number7/number8/number9/number10) !=Infinity) {
      console.log("10");
      resultV = number1/number2/number3/number4/number5/number6/number7/number8/number9/number10;
      inputUser = "";
      document.getElementById('inputResult').value = resultV;
    }
    else if ((number1/number2/number3/number4/number5/number6/number7/number8/number9) !=Infinity) {
      console.log("9");
      resultV = number1/number2/number3/number4/number5/number6/number7/number8/number9;
      inputUser = "";
      document.getElementById('inputResult').value = resultV;
    }
    else if ((number1/number2/number3/number4/number5/number6/number7/number8) !=Infinity) {
      console.log("8");
      resultV = number1/number2/number3/number4/number5/number6/number7/number8;
      inputUser = "";
      document.getElementById('inputResult').value = resultV;
    }
    else if ((number1/number2/number3/number4/number5/number6/number7) !=Infinity) {
      console.log("7");
      resultV = number1/number2/number3/number4/number5/number6/number7;
      inputUser = "";
      document.getElementById('inputResult').value = resultV;
    }
    else if ((number1/number2/number3/number4/number5/number6) !=Infinity) {
      console.log("6");
      resultV = number1/number2/number3/number4/number5/number6;
      inputUser = "";
      document.getElementById('inputResult').value = resultV;
    }
    else if ((number1/number2/number3/number4/number5) !=Infinity) {
      console.log("5");
      resultV = number1/number2/number3/number4/number5;
      inputUser = "";
      document.getElementById('inputResult').value = resultV;
    }
    else if ((number1/number2/number3/number4) != Infinity) {
      console.log("4");
      resultV = number1/number2/number3/number4;
      inputUser = "";
      document.getElementById('inputResult').value = resultV;
    }
    else if ((number1/number2/number3) != Infinity) {
      console.log("3");
      resultV = number1/number2/number3;
      inputUser = "";
      document.getElementById('inputResult').value = resultV;
    }
    else if ((number1/number2) != Infinity) {
      console.log("2");
      resultV = number1/number2;
      inputUser = "";
      document.getElementById('inputResult').value = resultV;
    }
  }
  number1 = 0;
  number2 = 0;
  number3 = 0;
  number3 = 0;
  number4 = 0;
  number5 = 0;
  number6 = 0;
  number6 = 0;
  number7 = 0;
  number8 = 0;
  number9 = 0;
  number10 = 0;
}