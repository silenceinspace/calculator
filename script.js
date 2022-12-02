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

//make the calculator work!
const divisionKey = document.querySelector('.division');
const multiplicationKey = document.querySelector('.multiplication');
const plusKey = document.querySelector('.plus');
const minusKey = document.querySelector('.minus');

plusKey.addEventListener('click', () => {
    display.textContent += plusKey.value;
    saveFirstNumber(); //test
    return '+';
});
minusKey.addEventListener('click', () => {
    display.textContent += minusKey.value;
});
divisionKey.addEventListener('click', () => {
    display.textContent += divisionKey.value;
});
multiplicationKey.addEventListener('click', () => {
    display.textContent += multiplicationKey.value;
});

//save the fist number + chosen operator? 
let num1;
let num2;
function saveFirstNumber() {
    num1 = currentValue;
}


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
        currentValue = display.textContent;
    });
})

clearKey.addEventListener('click', () => {
    display.textContent = '';
    currentValue = 0;
});

