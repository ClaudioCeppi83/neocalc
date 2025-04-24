import { safeEvaluate } from './calculator.js';

export function setupTerminal() {
  const input = document.getElementById('terminalInput');
  const output = document.getElementById('terminalOutput');

  input.addEventListener('keypress', e => {
    if (e.key === 'Enter') {
      const cmd = input.value.trim();
      input.value = '';

      output.innerHTML += `\n> ${cmd}`;

      if (cmd.startsWith('calc ')) {
        try {
          const result = safeEvaluate(cmd.slice(5));
          output.innerHTML += `\n= ${result}`;
        } catch (err) {
          output.innerHTML += `\n! Error: ${err.message}`;
        }
      } else if (cmd === 'clear') {
        output.innerHTML = '';
      } else if (cmd === 'help') {
        output.innerHTML += `\nCommands:\n- calc [expr]\n- clear\n- help`;
      } else {
        output.innerHTML += `\n! Unknown command.`;
      }

      output.scrollTop = output.scrollHeight;
    }
  });
}