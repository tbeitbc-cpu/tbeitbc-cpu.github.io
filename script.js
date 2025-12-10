document.addEventListener('DOMContentLoaded', () => {
    
    // Populate Matrix Grid
    const matrixGrid = document.getElementById('matrixGrid');
    const cols = 8;
    const rows = 12;

    for (let i = 0; i < cols * rows; i++) {
        const span = document.createElement('span');
        span.textContent = Math.floor(Math.random() * 99);
        span.style.opacity = Math.random();
        matrixGrid.appendChild(span);
    }

    // Dynamic Number Update Effect
    setInterval(() => {
        const matrixCells = matrixGrid.children;
        const randomCell = matrixCells[Math.floor(Math.random() * matrixCells.length)];
        randomCell.textContent = Math.floor(Math.random() * 99);
        randomCell.style.color = '#fff';
        
        setTimeout(() => {
            randomCell.style.color = '';
        }, 200);

    }, 100);

    // Typing effect for Status
    const statusElement = document.querySelector('.alert-text');
    const originalText = statusElement.innerText;
    
    // Blinking cursor or glitch effect
    setInterval(() => {
        if(Math.random() > 0.9) {
            statusElement.style.opacity = 0.5;
            setTimeout(() => statusElement.style.opacity = 1, 50);
        }
    }, 2000);

    // Initial load animation for bars
    const bars = document.querySelectorAll('.stat-bar');
    bars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.transition = 'width 1s ease-out';
            bar.style.width = width;
        }, 500);
    });

});
