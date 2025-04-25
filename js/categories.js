import { currentDisplay, updateDisplay } from './main.js';
import { updateHistory } from './history.js';

export function convertBase(type) {
    updateDisplay();
}

export function modularArithmetic() {
    let history = [];
    const mod = prompt("Enter modulus:");
    if (mod) {
        const num = parseFloat(currentDisplay);
        const result = num % parseFloat(mod);
        history.push(`${num} mod ${mod} = ${result}`);
        updateHistory();
        currentDisplay = result.toString();
        updateDisplay();
    }
}
