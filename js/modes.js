export function setupModes() {
    const neoBtn = document.getElementById('neoModeBtn');
    const lightBtn = document.getElementById('lightModeBtn');
  
    neoBtn.addEventListener('click', () => {
      document.body.classList.toggle('neo-mode');
      neoBtn.textContent = document.body.classList.contains('neo-mode') ? 'EXIT NEO' : 'NEO MODE';
    });
  
    lightBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      document.body.style.backgroundColor = isLight ? '#f0f0f0' : '#0D0208';
      document.body.style.color = isLight ? '#333' : '#00FF41';
      lightBtn.textContent = isLight ? 'DARK MODE' : 'LIGHT MODE';
    });
  }