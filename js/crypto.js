import { updateHistory } from './history.js';
import { updateDisplay } from './main.js';
import { appendToDisplay, clearDisplay } from './calculator.js';

let currentDisplay = '0';

export function modularArithmetic() {
  const mod = prompt("Enter modulus:");
  if (mod) {
    const num = parseFloat(currentDisplay);
    const result = num % parseFloat(mod);
    addToHistory(`${num} mod ${mod} = ${result}`);
    currentDisplay = result.toString();
    updateDisplay();
  }
}
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

  addToHistory(`Divisors of ${num}: ${divisors.join(', ')}`);
  currentDisplay = divisors.join(', ');
  updateDisplay();
}
export function primeFactorization() {
 
  let num = parseInt(currentDisplay);
  if (isNaN(num) || num <= 1) {
    currentDisplay = "Invalid input";
    updateDisplay();
    setTimeout(clearDisplay, 1000);
    return;
  }

  const factors = [];
  let divisor = 2;

  while (num >= 2) {
    if (num % divisor === 0) {
      factors.push(divisor);
      num = num / divisor;
    } else {
      divisor++;
    }
  }

  addToHistory(`Prime factors: ${factors.join(' × ')}`);
  currentDisplay = factors.join(' × ');
  updateDisplay();
}
export function generatePrng() {
  
  const seed = prompt("Enter seed (leave empty for random):");
  let randomNum;

  if (seed) {
    let x = Math.sin(parseFloat(seed)) * 10000;
    randomNum = x - Math.floor(x);
  } else {
    randomNum = Math.random();
  }

  addToHistory(`Random: ${randomNum}`);
  currentDisplay = randomNum.toString();
  updateDisplay();
}
