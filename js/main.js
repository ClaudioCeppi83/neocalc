import { createMatrixRain } from './matrix.js';
import {
  updateDisplay,
  currentDisplay
} from './calculator.js';
import { updateHistory, historyFunctions } from './history.js';
import { handleTerminalInput } from './terminal.js';
import { addEventListeners, updateCategory } from './dom.js';
import { utilsFunctions } from './utils.js';
import { createMatrixRain, matrixFunctions } from './matrix.js';
import { generatePrng } from './crypto.js';
import { findDivisors, primeFactorization } from './computational.js';
import { optimizeFunction, findExtrema } from './optimization.js';
import { calculateMean, calculateMedian, calculateStandardDeviation } from './statistics.js';

// Initialize
window.onload = function () {
    createMatrixRain();
    updateDisplay();
    updateCategory('basic');
    addEventListeners();
    handleTerminalInput();
    historyFunctions();
    utilsFunctions();
};

// Constants
export let currentDisplay = '0';
const DISPLAY_ID = 'display-text';

/**
 * Updates the content of the display with the current value of currentDisplay.
 */
export function updateDisplay() {
    const display = document.getElementById(DISPLAY_ID);
    display.textContent = currentDisplay;
}

// Call the functions
matrixFunctions();
findDivisors();
primeFactorization();
optimizeFunction();
findExtrema();
calculateMean();
calculateMedian();
calculateStandardDeviation();
createMatrixRain();
