// generate digits for buttons instead of writing them manually in HTML
const calculatorCase = document.querySelector('.digits');
(function createButtons() {
    for (let i=9; i>= 0; i--) {
        let button = document.createElement('button');
        button.className = 'item number';
        button.textContent = `${i}`;
        button.value = `${i}`;
        calculatorCase.appendChild(button);
    }
}()); //immediate function was used here!!!

//functions for calculation 
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
        display.textContent = parseFloat(result.toFixed(3));
    }

    if(operator == '-') {
        result = subtract(num1, num2);
        display.textContent = parseFloat(result.toFixed(3));
    }

    if(operator == '*') {
        result = multiply(num1, num2);
        display.textContent = parseFloat(result.toFixed(3));
    }

    if(operator == '/') {
        result = divide(num1, num2);
        display.textContent = parseFloat(result.toFixed(3));
    };
};

//DOM - 4 operators and equals key
const divisionKey = document.querySelector('.division');
const multiplicationKey = document.querySelector('.multiplication');
const plusKey = document.querySelector('.plus');
const minusKey = document.querySelector('.minus');
const equalsKey = document.querySelector('.equals-key');

let operatorIsPressed = false; //keep track of whether or not an operator has been pressed. If yes, then add to it the functionality of an equals key.

let num2;
let operator;
function operatorCanEqual() {
        num2 = +currentValue;
        operate(num1, num2, operator);
        isResult = true;
        operatorIsPressed = false;
        removeActiveClass();
        decimalIsUsed = false;
}; 

//functionality of 4 operators + equals key
plusKey.addEventListener('click', () => {

    if (operatorIsPressed) {
        if (operator == '+') {
            operatorCanEqual();
        } else {
            operatorCanEqual();

            operator = '+';
            highlightOperator(plusKey);
            saveFirstNumber();
            operatorIsPressed = true;
        };

    } else {
        operator = '+';
        highlightOperator(plusKey);
        saveFirstNumber();
        operatorIsPressed = true;
    };
});

//separate for now

minusKey.addEventListener('click', () => {

    if (operatorIsPressed) {
        if (operator == '-') {
            operatorCanEqual();
        } else {
            operatorCanEqual();

            operator = '-';
            highlightOperator(minusKey);
            saveFirstNumber();
            operatorIsPressed = true;
        };

    } else {
        operator = '-';
        highlightOperator(minusKey);
        saveFirstNumber();
        operatorIsPressed = true;
    };
});

//separate for now

divisionKey.addEventListener('click', () => {

    if (operatorIsPressed) {
        if (operator == '/') {
            operatorCanEqual();
        } else {
            operatorCanEqual();

            operator = '/';
            highlightOperator(divisionKey);
            saveFirstNumber();
            operatorIsPressed = true;
        };

    } else {
        operator = '/';
        highlightOperator(divisionKey);
        saveFirstNumber();
        operatorIsPressed = true;
    };
});

//separate for now

multiplicationKey.addEventListener('click', () => {

    if (operatorIsPressed) {
        if (operator == '*') {
            operatorCanEqual();
        } else {
            operatorCanEqual();

            operator = '*';
            highlightOperator(multiplicationKey);
            saveFirstNumber();
            operatorIsPressed = true;
        };

    } else {
        operator = '*';
        highlightOperator(multiplicationKey);
        saveFirstNumber();
        operatorIsPressed = true;
    };
});

equalsKey.addEventListener('click', () => {
    operatorCanEqual();
    removeActiveClass();
});

// add or remove class to show which operator is being used 
function highlightOperator(param) {
    param.classList.add('active');
}

function removeActiveClass() {
    plusKey.classList.remove('active');
    minusKey.classList.remove('active');
    divisionKey.classList.remove('active');
    multiplicationKey.classList.remove('active');
}

//enable further calculation with result 
let isResult = false;
let result = 0;

//save the fist number
let num1;
function saveFirstNumber() {

    if (isResult){
        num1 = +result;
    } else {
        num1 = +currentValue;
    };
    display.textContent = '';
    currentValue = '';
    decimalIsUsed = false;

};

// DOM - digits, display, clearKey
const buttons = document.querySelectorAll('.number');
const display = document.querySelector('.display-values');
const clearKey = document.querySelector('.clear-key');

// populate the display and store a value
let currentValue = '';
buttons.forEach((item) => {
    item.addEventListener('click', (e) => {

        if (!operatorIsPressed && result !== 0) {
            display.textContent += `${e.target.value}`;
            result += item.value;
            //if there's some number on the screen (result), then keep adding to it to make one number;
            //don't depend on null only
        } else {
        display.textContent += `${e.target.value}`;
        currentValue += item.value;
        };
    });
});

// wipe out all data 
clearKey.addEventListener('click', () => {
    removeActiveClass();
    display.textContent = '';
    currentValue = '';

    num1 = 0;
    num2 = 0;
    result = 0;

    isResult = false;
    operatorIsPressed = false;
    decimalIsUsed = false;
    console.log('data has been cleared...');
});

// allow one decimal 
let decimalIsUsed = false;
const period = document.querySelector('.period');
period.addEventListener('click', (e) => {

    if (!decimalIsUsed) {
        if (!operatorIsPressed && result !== 0) {
            display.textContent += `${e.target.value}`;
            result += '.';
            decimalIsUsed = true;
        } else {
            display.textContent += `${e.target.value}`;
            currentValue += '.';
            decimalIsUsed = true;
        }
    } else {
        e.preventDefault(); //if decimalIsUsed == true then prevent clicking the button
    };
});

const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', () => {
    console.log('backspace has been pressed');
});


alert('what is up!');
alert('Anton');
alert('Long time no see!');



/*

1. While doing multiple calculations, try to show the in-between result somewhere

2. Pressing = before entering anything causes problems, fix it

3. Display an error message if the user tries to divide by 0

4. Add a "backspace" button so the user can undo if they click the wrong number 

5. Add keyboard support (work on it inside of a different branch though, and eventually merge the changes into the master branch. Just a bit of git practice)

*/