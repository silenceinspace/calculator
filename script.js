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
        result = parseFloat(result.toFixed(3));
        display.textContent = result;
    }

    if(operator == '-') {
        result = subtract(num1, num2);
        result = parseFloat(result.toFixed(3));
        display.textContent = result;
    }

    if(operator == '*') {
        result = multiply(num1, num2);
        result = parseFloat(result.toFixed(3));
        display.textContent = result;
    }

    if(operator == '/') {
        if (num2 == 0) {
            alert("Can't divide by 0! Choose a number and an operator again:D"); //prevent calculation where num1 is being divided by 0;
            display.textContent = '';
            result = num1;
        } else {
            result = divide(num1, num2);
            result = parseFloat(result.toFixed(3));
            display.textContent = result;
        };
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

        if (display.textContent == '.') {
            alert("This calculation is not possible xD");
        } else {
            num2 = +currentValue;
            operate(num1, num2, operator);
            isResult = true;
            operatorIsPressed = false;
            removeActiveClass();

            showResults.textContent = parseFloat(result.toFixed(3)); //display subsequent results;
        };
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

equalsKey.addEventListener('click', (e) => {
    if (num1 === undefined) { //disable pressing the equals button as the very first option
        e.preventDefault();
        console.log('limit!');
    } else {
        operatorCanEqual();
        removeActiveClass();
    };
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

// DOM - digits, display, clearKey
const buttons = document.querySelectorAll('.number');
const display = document.querySelector('.display-values');
const showResults = document.querySelector("#show-results");
const clearKey = document.querySelector('.clear-key');

// populate the display and store a value
let currentValue = '';
buttons.forEach((item) => {
    item.addEventListener('click', (e) => {

        if (display.textContent.split("").length >= 10 || display.textContent == '0') {
            e.preventDefault(); //not allow any overflow on the display, fixed number of characters
        } else {
            if (!operatorIsPressed && result !== 0) {
                display.textContent += `${e.target.value}`;
                result += item.value;
                //if there's some number on the screen (result), then keep adding to it to make one number;
                //don't depend on null only
            } else {
                display.textContent += `${e.target.value}`;
                currentValue += item.value;
            };
        };
    });
});
        
//keyboard support
function showKeyboardValue(e, key) {

    if (display.textContent.split("").length >= 10 || display.textContent == '0') {
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

        if (display.textContent.split("").length >= 10 || foundPeriod == '.') {
            e.preventDefault();
            console.log('no period for you');
        } else {
            if (!operatorIsPressed && result !== 0) {
                display.textContent += e.key;
                result += e.key;
            } else {
                display.textContent += e.key;
                currentValue += e.key;
            };
            console.log('period');
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
                operatorIsPressed = true;
            };
    
        } else {
            operator = '+';
            highlightOperator(plusKey);
            saveFirstNumber();
            operatorIsPressed = true;
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
                operatorIsPressed = true;
            };
    
        } else {
            operator = '-';
            highlightOperator(minusKey);
            saveFirstNumber();
            operatorIsPressed = true;
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
                operatorIsPressed = true;
            };
    
        } else {
            operator = '*';
            highlightOperator(multiplicationKey);
            saveFirstNumber();
            operatorIsPressed = true;
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
                operatorIsPressed = true;
            };
    
        } else {
            operator = '/';
            highlightOperator(divisionKey);
            saveFirstNumber();
            operatorIsPressed = true;
        };
    //equal
    } else if (e.key == 'Enter'){
        if (num1 === undefined) {
            e.preventDefault();
            console.log('limit!');
        } else {
            operatorCanEqual();
            removeActiveClass();
        };
    //backspace
    } else if (e.key == 'Backspace') {
        console.log('backspace');
        
        if (isResult && !operatorIsPressed) {
            deleteOneChar = result.toString().split("");
            deleteOneChar.pop();
            result = deleteOneChar.join("");
            display.textContent = result;
            showResults.textContent = result;
        } else {
            deleteOneChar = currentValue.split("");
            deleteOneChar.pop(); 
            currentValue = deleteOneChar.join("");
            display.textContent = currentValue;
        };
    } else if (e.key == 'Delete') {
        clearAll();
    };
});

// wipe out all data 
function clearAll() {
    removeActiveClass();
    display.textContent = '';
    currentValue = '';
    showResults.textContent = '';

    num1 = undefined; 
    num2 = undefined;
    result = 0;

    isResult = false;
    operatorIsPressed = false;
    console.log('data has been cleared...');
}
clearKey.addEventListener('click', clearAll);

// allow one decimal 

const period = document.querySelector('.period');
period.addEventListener('click', limitPeriod);

function limitPeriod(e) {
    let array = display.textContent.split("");
    let foundPeriod = array.find(period => period == '.');

    if (foundPeriod == '.') {
        e.preventDefault();
        console.log('there is a period');
    } else {
        console.log('I will add a period');
        display.textContent += `${e.target.value}`;

        if (!operatorIsPressed && result !==0) {
            result += '.';
        } else {
            currentValue += '.';
        };
    };
};

let deleteOneChar;
const backspace = document.querySelector('.backspace');
backspace.addEventListener('click', () => {
    console.log('backspace has been pressed');

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
        display.textContent = currentValue;
        //update currentValue's value both on the screen and for calculation
    };
});

/*

1. Css for the project, remade the calculator case. Maybe make it bigger

2. Optimize the code (use array methods instead of hardcoding, avoid repetition, place most things in order);  

*/