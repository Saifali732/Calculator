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
            console.log(add(a, b));
            break;
        case '-':
            console.log(subtract(a, b));
            break;
        case '*':
            console.log(multiply(a, b));
            break;
        case '/':
            console.log(divide(a, b));
            break;
    }
}