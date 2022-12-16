let buffer = "";
let operation = "";
let num1, num2;

function clickNum(string){
    buffer += string;
 //   console.log("num: " + string + ", buffer: " + buffer);

}

function clickOp(string){
    num1 = +buffer;
    buffer = "";
    operation = string;
 //   console.log("num: " + num1 + ", buffer: " + buffer + ", operation: " + operation);

}

function result(){
    num2 = +buffer;
    buffer = "";
 //   console.log(num1, num2, operation);
    switch(operation){
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case ':':
            return divide(num1, num2);
        default:
            break;
    }
}
function add(a, b){
 //   console.log(a + b);
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}