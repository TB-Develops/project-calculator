
const numKey = document.querySelectorAll('.num');
const operatorKey = document.querySelectorAll('.operator');
const textField = document.getElementById('text-field');
const delKey = document.getElementById('delete');
const equalKey = document.getElementById('equal');
const clearKey = document.getElementById('clear');
const decimalKey = document.getElementById('decimal');
var input = [];
var operators = [];
var hasEvaluated = false;



document.addEventListener('keydown', function(event) {
    if (textField.textContent == 0 && (event.key >= 0 && event.key <= 9)){
        clearField();
    }
    switch(event.key){
        case '1':
            textField.textContent += '1';
            break;
        case '2':
            textField.textContent += '2';
            break;
        case '3':
            textField.textContent += '3';
            break;
        case '4':
            textField.textContent += '4';
            break;
        case '5':
            textField.textContent += '5';
            break;
        case '6':
            textField.textContent += '6';
            break;
        case '7':
            textField.textContent += '7';
            break;
        case '8':
            textField.textContent += '8';
            break;
        case '9':
            textField.textContent += '9';
            break;
        case '0':
            textField.textContent += '0';
            break;
        case 'Backspace':
            deleteChar();
            break;
    }
});


//Key Events ---------------------------------------------------->

numKey.forEach(e => {
    e.addEventListener('click', (el) => {
        if (textField.textContent == 0){
            clearField();
        }
        if(hasEvaluated == false){
            textField.textContent += el.target.getAttribute('data-num');
        }
        operatorListener();
    })
})

delKey.addEventListener('click', deleteChar);
clearKey.addEventListener('click', reset)

equalKey.addEventListener('click', () => {
    if(input.length > 0){
        let output = 0;
        input.push(Number(textField.textContent));
        if (input.length == operators.length){
            operators.pop();
        }
        for (i=0;i<operators.length;i++){
            output += operator(operators[i],input[i],input[i+1]);
        }
        input.splice(0, input.length);
        operators.splice(0, operators.length);
        textField.textContent = output;
        hasEvaluated = true;
    }
});

decimalKey.addEventListener('click', () => {
    let string = textField.textContent;
    console.log(string);
    if (!(string.includes('.'))){
        string += '.';
        textField.textContent = string;
    }
    decimalKey.removeEventListener('click', () => {})
});


//---------------------------------------------------------->



function storeOperator (){
    let operator = this.getAttribute('data-op');
    input.push(Number(textField.textContent));
    operators.push(operator)
    hasEvaluated = false;
    operatorKey.forEach(e => {
        e.removeEventListener('click', storeOperator);
        clearField();
        textField.textContent = '0';
    })
}

function operatorListener(){
    operatorKey.forEach(e => {
        e.addEventListener('click', storeOperator)
    })
}

function clearField(){
    textField.textContent='';
}


function reset(){
    input.splice(0, input.length);
    operators.splice(0, operators.length);
    textField.textContent = '0';
    hasEvaluated = false;
}

function deleteChar(){
    let string = textField.textContent;
    let endChar = string.length - 1
    var newString;
    if(string.length > 1){
        newString = string.slice(0, endChar)
    }
    else if(string.length == 1){
        newString = 0;
    };
    if (newString != undefined){
        textField.textContent = newString;
    };
}


//Operation Functions
function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operator(operator,a,b){
    let output = 0;
    switch(operator){
        case '+':
            output = add(a,b);
            break;
        case '-':
            output = subtract(a,b);
            break;
        case '*':
            output = multiply(a,b);
            break;
        case '/':
            output = divide(a,b);
            break;
    }

    return output;
}




