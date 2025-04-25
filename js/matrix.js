
export function createMatrixRain() {
  const chars = "01";
  const container = document.getElementById('matrixRain');
  const fontSize = 14;
  const columns = Math.floor(window.innerWidth / fontSize);

  for (let i = 0; i < columns; i++) {
    const column = document.createElement('div');
    column.className = 'matrix-char';
    column.style.left = `${i * fontSize}px`;
    column.style.animationDuration = `${Math.random() * 3 + 2}s`;
    column.style.animationDelay = `${Math.random() * 2}s`;
    container.appendChild(column);

    animateColumn(column);
  }

  function animateColumn(column) {
    let length = Math.floor(Math.random() * 10) + 5;
    let charsText = '';

    for (let i = 0; i < length; i++) {
      charsText += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    column.textContent = charsText;

    setTimeout(() => animateColumn(column), Math.random() * 1000 + 1000);
  }
}

