const scareBtn = document.getElementById('scare-btn');
const scareContainer = document.getElementById('scare-container');

scareBtn.addEventListener('click', () => {
    const scareElement = document.createElement('div');
    scareElement.classList.add('scare');
    scareElement.textContent = 'BOO!';
    scareContainer.appendChild(scareElement);

    setTimeout(() => {
        scareElement.remove();
    }, 1000);
});
