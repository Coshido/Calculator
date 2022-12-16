let buffer = "";
let operation = "";
let num1, num2;

function clickNum(string){
    buffer += string;
}

function clickOp(string){
    num1 = +buffer;
    buffer = "";
    operation = string;
}

function result(){
    num2 = +buffer;
    buffer = "";
    switch(operation){
        case '+':
            return add(num1, num2);
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