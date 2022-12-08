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
        return result;
    }

    if(operator == '-') {
        result = subtract(num1, num2);
        display.textContent = result;
        return result;
    }

    if(operator == '*') {
        result = multiply(num1, num2);
        display.textContent = result;
        return result;
    }

    if(operator == '/') {
        result = divide(num1, num2);
        display.textContent = result;
        return result;
    };
};

//connect calculator keys to their values
const divisionKey = document.querySelector('.division');
const multiplicationKey = document.querySelector('.multiplication');
const plusKey = document.querySelector('.plus');
const minusKey = document.querySelector('.minus');
const equalsKey = document.querySelector('.equals-key');

plusKey.addEventListener('click', () => {
    operator = '+';
    saveFirstNumber();
    // display.textContent += plusKey.value;
});
minusKey.addEventListener('click', () => {
    operator = '-';
    saveFirstNumber();
    // display.textContent += minusKey.value;
});
divisionKey.addEventListener('click', () => {
    operator = '/';
    saveFirstNumber();
    // display.textContent += divisionKey.value;
});
multiplicationKey.addEventListener('click', () => {
    operator = '*';
    saveFirstNumber();
    // display.textContent += multiplicationKey.value;
});
equalsKey.addEventListener('click', () => {
    num2 = currentValue;
    operate(num1, num2, operator);

    console.log('num2 has been saved...');
    console.log(`result is: ${result}`);

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
        console.log('num1 has been saved...')
    } else {
        num1 = currentValue;
        console.log('num1 has been saved...')
    };
    display.textContent = '';

    if (operator === "+") {
        console.log("add");
    } else if (operator === '-') {
        console.log('subtract');
    } else if (operator === '/') {
        console.log('division');
    } else if (operator === '*') {
        console.log('multiplication');
    };
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
    - when start typing the second number, remove an operator from the display;
    - alternatively make a new window displaying which operator is currently being used;
*/

