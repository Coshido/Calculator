const smallDisplay = document.querySelector('#small-display');
const bigDisplay = document.querySelector('#big-display');
let smallBuffer, bigBuffer, operation, num1, num2, result;

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
function operate(operation, a, b){
    switch (operation){
        case '+':
            result = add(a, b);
            break;
        case '-':
            result = subtract(a, b);
            break;
        case 'x':
            result = multiply(a, b);
            break;
        case ':':
            result = divide(a, b);
            break;
        default:
            break;
    }
    bigBuffer = result;
    updateBigDisplay();
    num2 = "";
}
function updateSmallDisplay(){ 
    smallDisplay.textContent = `${num1} ${operation} ${num2}`;
}
function updateBigDisplay(){
    bigDisplay.textContent = bigBuffer;
}
function clearBigDisplay(){
    bigDisplay.textContent = "0";
}
function pressed(string){;
    if(typeof +string == 'number' && !Number.isNaN(+string)){
        pressNumber(string);
    } else if (string == '.'){
        pressNumber(string);
    } else {
        pressOperation(string);
    }
}
function pressNumber(string){
    bigBuffer += string;
    updateBigDisplay();
}
function pressOperation(string){
    num1 = +bigDisplay.textContent;
    bigBuffer = "";
    operation = string;
    updateSmallDisplay();   
}
function equal(){
    num2 = +bigDisplay.textContent;
    bigBuffer = "";
    updateSmallDisplay();
    operate(operation, num1, num2);
}
function cancel(){
    num1 = num2 = result = operation = bigBuffer = smallBuffer = "";
    updateSmallDisplay();
    clearBigDisplay();
}
function del(){
    bigBuffer = bigDisplay.textContent;
    bigBuffer = bigBuffer.substring(0, bigBuffer.length - 1);
    updateBigDisplay();
}
function perc(){
    bigBuffer = +bigDisplay.textContent / 100;
    smallDisplay.textContent = bigBuffer + " %";
    updateBigDisplay();  
}
cancel();