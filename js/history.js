export function historyFunctions() {
    let history = [];

    /**
     * Updates the history display with the list of previous calculations.
     */
    function updateHistory() {
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

    function addToHistory(entry) {
        history.push(entry);
        updateHistory();
    }
    
    return {updateHistory,addToHistory};
}

export default historyFunctions;
