import { sanitizeInput } from './utils.js';
import { updateHistory } from './history.js';
import { updateDisplay, currentDisplay } from './main.js';

// Constants for messages
const ERROR_MESSAGE = 'Error';
const INVALID_INPUT_MESSAGE = 'Invalid input';
const DIVISION_BY_ZERO_MESSAGE = "Division by zero";

/**
 * Performs a safe calculation on a given mathematical expression, handling basic operations only.
 * @param {string} expression - The mathematical expression to evaluate.
 * @returns {number|string} The result of the calculation or an error message.
 */
export function safeCalculate(expression) {
    if (!expression) return 0;
    const sanitizedExpression = sanitizeInput(expression);
    if (sanitizedExpression.length !== expression.length) return INVALID_INPUT_MESSAGE;
    try {
        const result = new Function('return ' + sanitizedExpression)();
        if (!isFinite(result)) return DIVISION_BY_ZERO_MESSAGE;
        return result;
    } catch (error) {
        return INVALID_INPUT_MESSAGE;
    }
}

/**
 * Evaluates the current display content as a mathematical expression.
 * Stores the expression and its result in the history.
 */
export function calculate() {
    let history = [];
    const result = safeCalculate(currentDisplay);
    if (result === INVALID_INPUT_MESSAGE || result === DIVISION_BY_ZERO_MESSAGE) {
        currentDisplay = result;
        updateDisplay();
        setTimeout(clearDisplay, 1000);
    } else {
        history.push(`${currentDisplay} = ${result}`);
        updateHistory();
        currentDisplay = result.toString();
        updateDisplay();
    }
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

/**
 * Clears the display, setting currentDisplay to '0'.
 */
export function clearDisplay() {
    currentDisplay = '0';
    updateDisplay();
}

/**
 * Removes the last character from the current display. If the display contains only one character, it's cleared.
 */
export function backspace() {
    if (currentDisplay.length === 1) {
        clearDisplay();
    } else {
        currentDisplay = currentDisplay.slice(0, -1);
        updateDisplay();
    }
}
