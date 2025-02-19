'use strict';
let currentInput = '';
let currentOperator = '';
let previousInput = '';

function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

function setOperator(operator) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    currentOperator = operator;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (previousInput === '' || currentInput === '') return;
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    switch (currentOperator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = curr !== 0 ? prev / curr : 'エラー';
            break;
        default:
            return;
    }

    currentInput = result.toString();
    currentOperator = '';
    previousInput = '';
    updateDisplay();
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    previousInput = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentInput;
}

function playClickSound() {
    let audio = new Audio('button04a.mp3');
    audio.play();
}

document.addEventListener("DOMContentLoaded", function() {
    document.body.style.backgroundImage = "url('no39.png')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
});
