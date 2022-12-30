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

function operate(num1, num2, operator) {

    switch(operator) { //switch ---> if(operator == '+')
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = subtract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            if (num2 == 0) {
                alert("Can't divide by 0!");
                result = num1;
                break;
            } else {
                result = divide(num1, num2);
                break;
            };
    };
    roundResultWithDecimals();
    isResult = true;
};

function roundResultWithDecimals() {
    result = parseFloat(result.toFixed(3));
    display.textContent = result;
}

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

        if (display.textContent == '.') {
            alert("This calculation is not possible xD");
        } else {
            num2 = +currentValue;
            operate(num1, num2, operator);
            removeActiveClass();

            showResults.textContent = parseFloat(result.toFixed(3)); //display subsequent results;
        };
}; 

//functionality of 4 operators + equals key
plusKey.addEventListener('click', usePlusKey);
function usePlusKey() {
    if (operatorIsPressed) {
        switch (operator) {
            case '+':
                operatorCanEqual();
                break;
            default:
                operatorCanEqual();
                operator = '+';
                highlightOperator(plusKey);
                saveFirstNumber();
        };
    } else {
        operator = '+';
        highlightOperator(plusKey);
        saveFirstNumber();
    };
};

minusKey.addEventListener('click', useMinusKey);
function useMinusKey() {
    if (operatorIsPressed) {
        switch (operator) {
            case '-':
                operatorCanEqual();
                break;
            default:
                operatorCanEqual();
                operator = '-';
                highlightOperator(minusKey);
                saveFirstNumber();
        };
    } else {
        operator = '-';
        highlightOperator(minusKey);
        saveFirstNumber();
    };
};

divisionKey.addEventListener('click', useDivisionKey);
function useDivisionKey() {
    if (operatorIsPressed) {
        switch (operator) {
            case '/':
                operatorCanEqual();
                break;
            default:
                operatorCanEqual();
                operator = '/';
                highlightOperator(divisionKey);
                saveFirstNumber();
        };
    } else {
        operator = '/';
        highlightOperator(divisionKey);
        saveFirstNumber();
    };
};

multiplicationKey.addEventListener('click', useMultiplicationKey);
function useMultiplicationKey() {
    if (operatorIsPressed) {
        switch (operator) {
            case '*':
                operatorCanEqual();
                break;
            default:
                operatorCanEqual();
                operator = '*';
                highlightOperator(multiplicationKey);
                saveFirstNumber();
        };
    } else {  
        operator = '*';
        highlightOperator(multiplicationKey);
        saveFirstNumber();
    };
};

equalsKey.addEventListener('click', (e) => {
    if (num1 === undefined) { //disable pressing the equals button before everything else
        e.preventDefault();
    } else {
        operatorCanEqual();
    };
});

// add or remove class to show which operator is being used 
function highlightOperator(param) {
    param.classList.add('active');
    operatorIsPressed = true;
}

function removeActiveClass() {
    plusKey.classList.remove('active');
    minusKey.classList.remove('active');
    divisionKey.classList.remove('active');
    multiplicationKey.classList.remove('active');

    operatorIsPressed = false;
}

//enable further calculation with result 
let isResult = false;
let result = 0;

//save the fist number
let num1;
function saveFirstNumber() {

    if (display.textContent == '.') {
        alert('This calculation is not possible xD');
    } else {
        if (isResult){
            num1 = +result;
        } else {
            num1 = +currentValue;
        };
        display.textContent = '';
        currentValue = '';

        showResults.textContent = parseFloat(num1.toFixed(3)); // display subsequent results
    };
};

// DOM - digits, display
const buttons = document.querySelectorAll('.number');
const display = document.querySelector('.display-values');
const showResults = document.querySelector("#show-results");

// populate the display and store a value
let currentValue = '';
buttons.forEach((item) => {
    item.addEventListener('click', (e) => {

        if (display.textContent.split("").length >= 13 || display.textContent == '0') {
            e.preventDefault(); //not allow any overflow on the display, fixed number of characters
        } else {
            if (!operatorIsPressed && result !== 0) { //if there's some number on the screen (result), then keep adding to it to make one number;

                display.textContent += `${e.target.value}`;
                result += item.value;
            } else {
                display.textContent += `${e.target.value}`;
                currentValue += item.value;
            };
        };
    });
});

// allow one decimal 
const period = document.querySelector('.period');
period.addEventListener('click', limitPeriod);
function limitPeriod(e) {
    let array = display.textContent.split("");
    let foundPeriod = array.find(period => period == '.');

    if (foundPeriod) {
        e.preventDefault();
    } else {
        display.textContent += `${e.target.value}`;

        if (!operatorIsPressed && result !==0) {
            result += '.';
        } else {
            currentValue += '.';
        };
    };
};

//backspace key
const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', useBackspace);
function useBackspace() {
    let deleteOneChar;
    if (isResult && !operatorIsPressed) {
        deleteOneChar = result.toString().split("");
        deleteOneChar.pop();
        result = deleteOneChar.join("");
        display.textContent = result;
        showResults.textContent = result;
    } else {
        deleteOneChar = currentValue.split(""); //split a value in the variable
        deleteOneChar.pop(); //remove the last kinda array item because of the split method 
        currentValue = deleteOneChar.join(""); //join array items into one string again;
        display.textContent = currentValue; //update currentValue's value both on the screen and for calculation
    };
};

// wipe out all data
const clearKey = document.querySelector('.clear-key');
clearKey.addEventListener('click', clearAll);
function clearAll() {
    display.textContent = '';
    showResults.textContent = '';
    currentValue = '';

    num1 = undefined; 
    num2 = undefined;
    result = 0;

    isResult = false;
    removeActiveClass();
};

// try to keep this section shorter!!!
//keyboard support
function showKeyboardValue(e, key) {

    if (display.textContent.split("").length >= 13 || display.textContent == '0') {
        e.preventDefault();
    } else {
        if (!operatorIsPressed && result !== 0) {
            display.textContent += key;
            result += key;
        } else {
            display.textContent += key;
            currentValue += key;
        };
    };
};

window.addEventListener('keydown', (e) => {
    //numbers
    // create an object here??
    if (e.key == '1') {
        showKeyboardValue(e, e.key);
    } else if (e.key == '2') {     
        showKeyboardValue(e, e.key);
    } else if (e.key == '3') {     
        showKeyboardValue(e, e.key);
    } else if (e.key == '4') {     
        showKeyboardValue(e, e.key);
    } else if (e.key == '5') {     
        showKeyboardValue(e, e.key);
    } else if (e.key == '6') {     
        showKeyboardValue(e, e.key);
    } else if (e.key == '7') {     
        showKeyboardValue(e, e.key);
    } else if (e.key == '8') {     
        showKeyboardValue(e, e.key);
    } else if (e.key == '9') {     
        showKeyboardValue(e, e.key);
    } else if (e.key == '0') {     
        showKeyboardValue(e, e.key);
    } 
    
    //operators
    else if (e.key == '.') {

        let array = display.textContent.split("");
        let foundPeriod = array.find(period => period == '.');

        if (display.textContent.split("").length >= 13 || foundPeriod == '.') {
            e.preventDefault();
        } else {
            showKeyboardValue(e, e.key);
        };

    //plus
    } else if (e.key == '+') {

        if (operatorIsPressed) {
            if (operator == '+') {
                operatorCanEqual();
            } else {
                operatorCanEqual();
    
                operator = '+';
                highlightOperator(plusKey);
                saveFirstNumber();
            };
    
        } else {
            operator = '+';
            highlightOperator(plusKey);
            saveFirstNumber();
        };

    //minus
    } else if (e.key == '-') {

        if (operatorIsPressed) {
            if (operator == '-') {
                operatorCanEqual();
            } else {
                operatorCanEqual();
    
                operator = '-';
                highlightOperator(minusKey);
                saveFirstNumber();
            };
    
        } else {
            operator = '-';
            highlightOperator(minusKey);
            saveFirstNumber();
        };
        
    //multiplication
    } else if (e.key == '*') {  

        if (operatorIsPressed) {
            if (operator == '*') {
                operatorCanEqual();
            } else {
                operatorCanEqual();
    
                operator = '*';
                highlightOperator(multiplicationKey);
                saveFirstNumber();
            };
    
        } else {
            operator = '*';
            highlightOperator(multiplicationKey);
            saveFirstNumber();
        };

    //division
    } else if (e.key == '/') {

        if (operatorIsPressed) {
            if (operator == '/') {
                operatorCanEqual();
            } else {
                operatorCanEqual();
    
                operator = '/';
                highlightOperator(divisionKey);
                saveFirstNumber();
            };
    
        } else {
            operator = '/';
            highlightOperator(divisionKey);
            saveFirstNumber();
        };

    //equal
    } else if (e.key == 'Enter'){
        if (num1 === undefined) {
            e.preventDefault();
        } else {
            operatorCanEqual();
            removeActiveClass();
        };
    
    //backspace
    } else if (e.key == 'Backspace') {
        useBackspace();        
    } else if (e.key == 'Delete') {
        clearAll();
    };
});

/*

- Optimize the code (use array methods instead of hardcoding, avoid repetition, place most things in order);  

*/