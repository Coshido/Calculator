let buffer = "";
let operation = "";
let num1, num2;
let result = 0;
let clrscr = false;
const bigDisplay = document.querySelector('#big-display');
const smallDisplay = document.querySelector('#small-display');

function clickNum(string){
    if(operation == "="){
        smallDisplay.textContent = "";
        bigDisplay.textContent = "";
        operation = "";
    }
    buffer += string;
    smallDisplay.textContent += string;
 //   console.log("num: " + string + ", buffer: " + buffer);

}

function clickOp(string){
    if(!(operation == '') || !(operation == '=')){
        equal();
        smallDisplay.textContent = result;
    }
 
    //   if(!(bigDisplay.textContent == "" || bigDisplay.textContent == "0")){
 //       num1 = +bigDisplay.textContent;
 //   } else {
 //       num1 = +buffer;
 //   }
    buffer = "";
    operation = string;
    smallDisplay.textContent += " " + operation + " ";
 //   console.log("num: " + num1 + ", buffer: " + buffer + ", operation: " + operation);

}

function equal(){
    num2 = +buffer;
    buffer = "";
 //   clrscr = true;
 //   console.log(num1, num2, operation);
    switch(operation){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case 'x':
            result = num1 * num2;
            break;
        case ':':
            result = (num1 / num2).toFixed(4);
            break;
        default:
            break;
    }
    bigDisplay.textContent = result;
    operation = "=";
}

function cancel(){
    num1 = num2 = buffer = "";
    result = 0;
    smallDisplay.textContent = "";
    bigDisplay.textContent = result;
}