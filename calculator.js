// create basic functions for calculator

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}

// create function to perform an operation
function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
    }
}

// the div that displays the current value
const currentNumber = document.querySelector('#current');
const previousNumber = document.querySelector('#previous');
// list of all of the digits buttons in the calculator
const digits = document.querySelectorAll('.number');
const operations = document.querySelectorAll('.operation');
const clear = document.querySelector('#clear');

// variable for the current value in the DISPLAY
let displayValue = 0;

//current operation
let currentOperation = null;

// operators
let operator1, operator2;

// variable to see if the operation has just changed
let justChanged = true;

// function to update display of calculator when clicking a button
function displayNumber(buttonValue) {
    let current = currentNumber.textContent;
    // update the screen
    if (current == 0 || current != displayValue) {
        currentNumber.textContent = buttonValue;
    } else {
        currentNumber.textContent = currentNumber.textContent + buttonValue;
    }

    // save the value into display variable
    displayValue = parseInt(currentNumber.textContent);
}

digits.forEach(digit => digit.addEventListener("click",
    () => displayNumber(digit.textContent)));

// make clear button function 
clear.addEventListener("click", () => {
    currentNumber.textContent = 0;
    displayValue = 0;
});

// make the operation and = work
function setOperation(operationValue) {
    if (operationValue == '=' && operator1 != undefined) {
        // check if we are doing consecutive = without changing anything
        if (justChanged) {
            operator2 = Number(currentNumber.textContent);
            justChanged = false;
        }
        let result = operate(currentOperation, operator1, operator2);
        currentNumber.textContent = result;
        operator1 = result;

    } else {
        currentOperation = operationValue;
        operator1 = Number(currentNumber.textContent);
        displayValue = 0;
        justChanged = true;
    }
}

operations.forEach(operation => operation.addEventListener("click",
    () => setOperation(operation.textContent)));