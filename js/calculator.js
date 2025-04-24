export function calculatorFunctions() {
    let currentDisplay = '0';
    /**
    * Updates the content of the display with the current value of currentDisplay.
    */
    function updateDisplay() {
        const display = document.getElementById('display-text');
        display.textContent = currentDisplay;
    }
    /**
    * Appends a value to the current display, unless the display is '0' and the value is not a dot.
    * @param {string} value - The value to append to the display.
    */
    export function appendToDisplay(value) {
        if (value === '.' && currentDisplay.includes('.')) return;
        if (currentDisplay === '0' && value !== '.') {
            currentDisplay = value;
        } else {
            currentDisplay += value;
        }
        updateDisplay();
    }

    export function clearDisplay() {
        currentDisplay = '0';
        updateDisplay();
    }

    export function backspace() {
        if (currentDisplay.length === 1) {
            clearDisplay();
        } else {
            currentDisplay = currentDisplay.slice(0, -1);
            updateDisplay();
        }
    }

    export function calculate() {
        try {
            const result = safeCalculate(currentDisplay);
            //history.push(`${currentDisplay} = ${result}`);
            updateHistory();
            currentDisplay = result.toString();
            updateDisplay();
        } catch (err) {
            currentDisplay = 'Error';
            updateDisplay();
            setTimeout(clearDisplay, 1000);
        }
    }

    export function safeCalculate(expression) {
        const allowed = /^[0-9+\-*/().]+$/;
        if (!allowed.test(expression)) throw new Error("Invalid characters");
        return Function(`"use strict"; return (${expression})`)();
    }
}

