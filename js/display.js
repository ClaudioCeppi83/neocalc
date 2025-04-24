export let currentDisplay = '0';

export function updateDisplay() {
  document.getElementById('display').textContent = currentDisplay;
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
