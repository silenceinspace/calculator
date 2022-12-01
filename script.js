//function expression vs function declaration;
function add(a,b) {
    return a+b;
};

function subtract(a,b) {
    return a-b;
} 

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    return a/b;
}

function operate(num1, num2, operator){
    if(operator == '+') {
        return result = add(num1, num2);
    }

    if(operator == '-') {
        return result = subtract(num1, num2);
    }

    if(operator == '*') {
        return result = multiply(num1, num2);
    }

    if(operator == '/') {
        return result = divide(num1, num2);
    };
};

