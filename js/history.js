import { currentDisplay, updateDisplay } from './main.js';

let history = [];

/**
 * Updates the history display with the list of previous calculations.
 */
export function updateHistory() {
    const historyElement = document.getElementById('history');
    historyElement.innerHTML = '';

    history.slice().reverse().forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        div.className = 'cursor-pointer hover:text-green-400';
        div.onclick = () => {
            currentDisplay = item.split(' = ')[0];
            updateDisplay();
        };
        historyElement.appendChild(div);
    });
}

export function addToHistory(entry) {
    history.push(entry);
    updateHistory();
}
    

