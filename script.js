// script.js
document.addEventListener('DOMContentLoaded', () => {
    const scene = document.querySelector('.scene');
    const toggleButton = document.getElementById('toggleLetter');
    const letter = document.querySelector('.letter');

    toggleButton.addEventListener('click', () => {
        if (letter.style.display === 'none' || letter.style.display === '') {
            letter.style.display = 'block';
            toggleButton.textContent = 'Ocultar Carta';
        } else {
            letter.style.display = 'none';
            toggleButton.textContent = 'Mostrar Carta';
        }
    });

    function createFloatingElement(className, delay) {
        const element = document.createElement('div');
        element.className = className;
        element.style.top = `${Math.random() * 100}vh`;
        element.style.left = `${Math.random() * 100}vw`;
        element.style.animationDelay = `${delay}s`;
        scene.appendChild(element);
    }

    for (let i = 0; i < 30; i++) {
        createFloatingElement('flower', Math.random() * 5);
        createFloatingElement('heart', Math.random() * 5);
    }
});
