import { safeCalculate } from './calculator.js';

/**
 * Handles terminal input, processing commands and displaying output.
 */
export function handleTerminalInput() {
  const input = document.getElementById('terminalInput');
  const output = document.getElementById('terminalOutput');

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
      const command = input.value;
      input.value = '';

      output.innerHTML += `<div>> ${command}</div>`;

      // Process command
      if (command.startsWith('calc ')) {
        try {
          const expr = command.substring(5);
          const result = safeCalculate(expr);
          output.innerHTML += `<div>= ${result}</div>`;
        } catch (error) {
          output.innerHTML += `<div>! Error: ${error.message}</div>`;
        }
      } else if (command === 'clear') {
        output.innerHTML = '';
      } else if (command === 'help') {
        output.innerHTML += `<div>Available commands:</div>`;
        output.innerHTML += `<div>- calc [expression]: Evaluate math expression</div>`;
        output.innerHTML += `<div>- clear: Clear terminal</div>`;
        output.innerHTML += `<div>- help: Show this help</div>`;
      } else {
        output.innerHTML += `<div>! Unknown command. Type 'help' for available commands.</div>`;
      }

      output.scrollTop = output.scrollHeight;
    }
  });
}