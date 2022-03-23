let a =2;
let b= 2;
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
    let output;
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


console.log(operator('*',a,b));

