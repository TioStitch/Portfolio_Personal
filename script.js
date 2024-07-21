document.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div');
    container.className = 'cursor-container';
    document.body.appendChild(container);

    const dot = document.createElement('div');
    dot.className = 'cursor-dot';
    container.appendChild(dot);

    let mouseX = 0;
    let mouseY = 0;

    function updateDotPosition() {
        // Suavização da posição
        const currentLeft = parseFloat(dot.style.left) || mouseX;
        const currentTop = parseFloat(dot.style.top) || mouseY;

        dot.style.left = `${currentLeft + (mouseX - currentLeft) * 0.1}px`;
        dot.style.top = `${currentTop + (mouseY - currentTop) * 0.1}px`;

        requestAnimationFrame(updateDotPosition);
    }

    document.addEventListener('mousemove', (event) => {
        mouseX = event.clientX;
        mouseY = event.clientY;
    });

    // Inicia a animação da bolinha
    requestAnimationFrame(updateDotPosition);
});