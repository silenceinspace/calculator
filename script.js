//function expression vs function declaration??;
function add(a,b) {
    return a+b;
};
function subtract(a,b) {
    return a-b;
};
function multiply(a,b) {
    return a*b;
};
function divide(a,b) {
    return a/b;
};

function operate(num1, num2, operator){
    if(operator == '+') {
        result = add(num1, num2);
        display.textContent = result;
    }

    if(operator == '-') {
        result = subtract(num1, num2);
        display.textContent = result;
    }

    if(operator == '*') {
        result = multiply(num1, num2);
        display.textContent = result;
    }

    if(operator == '/') {
        result = divide(num1, num2);
        display.textContent = result;
    };
    // return result;
};

//connect calculator keys to their values
const divisionKey = document.querySelector('.division');
const multiplicationKey = document.querySelector('.multiplication');
const plusKey = document.querySelector('.plus');
const minusKey = document.querySelector('.minus');
const equalsKey = document.querySelector('.equals-key');

plusKey.addEventListener('click', () => {

    // if (num1 == result || num1 == currentValue) {
    //     plusKey.classList.remove('active');
    //     num2 = currentValue;
    //     operate(num1, num2, operator);
    //     isResult = true;
    // }

    operator = '+';
    highlightOperator(plusKey);
    saveFirstNumber();

});

minusKey.addEventListener('click', () => {
    operator = '-';
    highlightOperator(minusKey);
    saveFirstNumber();
});

divisionKey.addEventListener('click', () => {
    operator = '/';
    highlightOperator(divisionKey);
    saveFirstNumber();
});

multiplicationKey.addEventListener('click', () => {
    operator = '*';
    highlightOperator(multiplicationKey);
    saveFirstNumber();
});

function highlightOperator(param) {
    param.classList.add('active');
}

equalsKey.addEventListener('click', () => {
    plusKey.classList.remove('active');
    minusKey.classList.remove('active');
    divisionKey.classList.remove('active');
    multiplicationKey.classList.remove('active');

    num2 = currentValue;
    operate(num1, num2, operator);
    isResult = true;

});

//enable further calculation with result 
let isResult = false;
let result = 0;

//save the fist number + chosen operator?
let num1;
let num2;
let operator;
function saveFirstNumber() {

    if (isResult){
        num1 = result;
    } else {
        num1 = currentValue;
    };
    display.textContent = '';

};

const calculatorCase = document.querySelector('.digits');
(function createButtons() {
    for (let i=9; i>= 0; i--) {
        let button = document.createElement('button');
        button.className = 'item number';
        button.textContent = `${i}`;
        button.value = `${i}`;
        calculatorCase.appendChild(button);
    }
}()); //immediate function

const buttons = document.querySelectorAll('.number');
const display = document.querySelector('.display-values');
const clearKey = document.querySelector('.clear-key');

// let valueInTheDisplay
let currentValue = 0;
buttons.forEach((item) => {
    item.addEventListener('click', (e) => {
        display.textContent += `${e.target.value}`;
        currentValue = +display.textContent;
    });
})

clearKey.addEventListener('click', () => {
    display.textContent = '';
    currentValue = 0;
    num1 = 0;
    num2 = 0;
    result = 0;
    isResult = false;
    console.log('data has been cleared...');
    //find a way how to erase data more sufficiently;
});

/*
1. How can I optimize the code with objects/arrays, to avoid repetition
2. instead of hover effect, add a fade-out highlighting element 
*/
