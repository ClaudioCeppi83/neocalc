function domFunctions() {
    const ACTIVE_BUTTON_CLASS = 'btn-active';
    const VISIBLE_CATEGORY_CLASS = 'visible-category';
    const HIDDEN_CATEGORY_CLASS = 'hidden-category';

    function updateCategory(category) {
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove(ACTIVE_BUTTON_CLASS);
        });
        document.querySelector(`[data-category="${category}"]`).classList.add(ACTIVE_BUTTON_CLASS);

        document.querySelectorAll('.category-content').forEach(content => {
            content.classList.remove(VISIBLE_CATEGORY_CLASS);
            content.classList.add(HIDDEN_CATEGORY_CLASS);
        });
        document.getElementById(category).classList.remove(HIDDEN_CATEGORY_CLASS);
        document.getElementById(category).classList.add(VISIBLE_CATEGORY_CLASS);
    }

    function toggleNeoMode(isNeoMode) {
        if (isNeoMode) {
            document.body.classList.add('neo-mode');
            document.getElementById('neoModeBtn').textContent = 'EXIT NEO';
            document.getElementById('terminalOutput').innerHTML +=
                '<div>> Neo mode activated. Accessing hidden functions...</div>';
        } else {
            document.body.classList.remove('neo-mode');
            document.getElementById('neoModeBtn').textContent = 'NEO MODE';
            document.getElementById('terminalOutput').innerHTML +=
                '<div>> Neo mode deactivated. Returning to normal operations.</div>';
        }
    }

    function toggleLightMode() {
        document.body.classList.toggle('light-mode');
        const lightModeBtn = document.getElementById('lightModeBtn');
        if (document.body.classList.contains('light-mode')) {
            document.body.style.backgroundColor = '#f0f0f0';
            document.body.style.color = '#333';
            lightModeBtn.textContent = 'DARK MODE';
        } else {
            document.body.style.backgroundColor = '#0D0208';
            document.body.style.color = '#00FF41';
            lightModeBtn.textContent = 'LIGHT MODE';
        }
    }

    function addEventListeners() {
        document.querySelectorAll('.category-btn').forEach(button => {
            button.addEventListener('click', function () {
                const category = this.getAttribute('data-category');
                updateCategory(category);
            });
        });

        document.getElementById('neoModeBtn').addEventListener('click', function () {
            toggleNeoMode(!document.body.classList.contains('neo-mode'));
        });

        document.getElementById('lightModeBtn').addEventListener('click', toggleLightMode);
    }
    return {
        updateCategory,
        toggleNeoMode,
        toggleLightMode,
        addEventListeners
    }
}
export { domFunctions };