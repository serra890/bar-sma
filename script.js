function hayirDedin() {
    const mesaj = document.getElementById('hayir-mesaj');
    mesaj.textContent = 'Hayır diyemezsin ballı çöreğim! 😘';
    mesaj.style.animation = 'shake 0.5s';
    setTimeout(() => {
        mesaj.style.animation = '';
    }, 500);
}

function showLove() {
    const yazi = document.getElementById('rotating-text');
    yazi.style.display = 'block';
}

// Sürekli balon üretme
const balloonContainer = document.getElementById('balloon-container');
setInterval(() => {
    for (let i = 0; i < 4; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDuration = `${8 + Math.random() * 5}s`;
        balloonContainer.appendChild(balloon);
        setTimeout(() => {
            balloon.remove();
        }, 15000);
    }
}, 500);

// Sürekli havai fişek üret
const fireworksContainer = document.getElementById('fireworks-container');
setInterval(() => {
    for (let i = 0; i < 5; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.top = `${Math.random() * 100}%`;
        fireworksContainer.appendChild(firework);
        setTimeout(() => {
            firework.remove();
        }, 1500);
    }
}, 700);
