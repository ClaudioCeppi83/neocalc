import { currentDisplay, updateDisplay } from './display.js';
import { addToHistory } from './history.js';

export function setupCalculator() {
  window.appendToDisplay = appendToDisplay;
  window.clearDisplay = clearDisplay;
  window.backspace = backspace;
  window.calculate = calculate;
}

export function appendToDisplay(value) {
  currentDisplay = (currentDisplay === '0' && value !== '.') ? value : currentDisplay + value;
  updateDisplay();
}

export function clearDisplay() {
  currentDisplay = '0';
  updateDisplay();
}

export function backspace() {
  currentDisplay = currentDisplay.length === 1 ? '0' : currentDisplay.slice(0, -1);
  updateDisplay();
}

export function calculate() {
  try {
    const result = safeEvaluate(currentDisplay);
    addToHistory(`${currentDisplay} = ${result}`);
    currentDisplay = result.toString();
    updateDisplay();
  } catch (err) {
    currentDisplay = 'Error';
    updateDisplay();
    setTimeout(clearDisplay, 1000);
  }
}

export function safeEvaluate(expr) {
  const allowed = /^[0-9+\-*/().MathPIE]+$/;
  if (!allowed.test(expr)) throw new Error("Invalid characters");
  return Function(`"use strict"; return (${expr})`)();
}