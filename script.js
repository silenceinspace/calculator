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

const calculatorCase = document.querySelector('.digits');
function createButtons() {
    for (let i=9; i>= 0; i--) {
        let button = document.createElement('button');
        button.className = 'item';
        button.textContent = `${i}`;
        calculatorCase.appendChild(button);
    }
};
createButtons();

const buttons = document.querySelectorAll('.item');
buttons.forEach((item) => {
    item.addEventListener('click', populateDisplay);
})

const display = document.querySelector('.display-values');
function populateDisplay() {
    display.textContent += '5';
}

//find a way how to populate the display with the exact button I press (e.g. if I press "1", then the display should be populated with "1");
