import { currentDisplay, updateDisplay } from './main.js';
import { updateHistory } from './history.js';

let history = [];
/**
 * Finds all divisors of a number.
 */
export function findDivisors() {
    const num = parseInt(currentDisplay);
    if (isNaN(num) || num <= 0) {
        currentDisplay = "Invalid input";
        updateDisplay();
        setTimeout(clearDisplay, 1000);
        return;
    }
    const divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) divisors.push(i);
    }
    history.push(`Divisors of ${num}: ${divisors.join(', ')}`);
    updateHistory();
    currentDisplay = divisors.join(', ');
    updateDisplay();
}

/**
 * Finds the prime factorization of a number.
 */
export function primeFactorization() {
    history = [];
    let num = parseInt(currentDisplay);
    if (isNaN(num) || num <= 1) {
        currentDisplay = "Invalid input";
        updateDisplay();
        setTimeout(clearDisplay, 1000);
        return;
    }
    const factors = [];

    let divisor = 2;
    // ... (rest of your primeFactorization logic)
}