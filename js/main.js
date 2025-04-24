import { createMatrixRain } from './matrix.js';
import { updateDisplay,clearDisplay } from './dom.js';
import { updateHistory } from './history.js';
import { toggleNeoMode, toggleLightMode } from './dom.js';
import { updateCategory } from './dom.js';
import { terminalInputHandler } from './terminal.js';
import { calculate, appendToDisplay, backspace } from './calculator.js';



(function() {

  const DISPLAY_ID = 'display-text';

  window.onload = () => {
    createMatrixRain();
    updateDisplay(DISPLAY_ID, '0');
    updateCategory('basic');
  };

  // Event listeners for basic operations
  document.querySelectorAll('.number-btn, .operator-btn').forEach(button => {
    button.addEventListener('click', () => {
      appendToDisplay(button.textContent);
    });
  });

  document.getElementById('equal-btn').addEventListener('click', calculate);
  document.getElementById('clear-btn').addEventListener('click', clearDisplay);
  document.getElementById('backspace-btn').addEventListener('click', backspace);

  // Event listeners for category switching
  document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', function() {
      const category = this.getAttribute('data-category');
      updateCategory(category);
    });
  });

  // Event listeners for modes
  document.getElementById('neoModeBtn').addEventListener('click', toggleNeoMode);
  document.getElementById('lightModeBtn').addEventListener('click', toggleLightMode);

  // Event listener for terminal
  document.getElementById('terminalInput').addEventListener('keypress', terminalInputHandler);


})();
