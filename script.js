// CONFIGURATION: Set your anniversary date here
const startDate = new Date("March 1, 2025 00:00:00").getTime();

// Wholesome messages for the cards
const memories = {
    1: "It’s not just about the big things; it’s the way you make me laugh even when I’m having a bad day. You have this magic in you that just makes everything feel lighter and better.",
    2: "Our late-night talks are my favorite part of us. I love how we can talk about the most random things or the deepest parts of our lives and never get tired of it. I feel truly seen by you.",
    3: "Thank you for being my biggest supporter. Knowing you're in my corner gives me so much strength. I hope you know I'll always be right there for you too, no matter what.",
    4: "Sometimes, just being in the same room as you is enough to make me feel at peace. You are my safe space, Swara. I'm so grateful for the comfort and love you bring into my life."
};

let viewedMemories = new Set();

function nextSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0, 0);
}

function openLetter(num) {
    const overlay = document.getElementById('overlay');
    const content = document.getElementById('popup-content');
    content.innerText = memories[num];
    overlay.classList.add('active');
    
    viewedMemories.add(num);
    if(viewedMemories.size >= 4) {
        document.getElementById('finalBtn').classList.remove('hidden');
    }
}

function closeLetter() {
    document.getElementById('overlay').classList.remove('active');
}

// Timer Logic
function updateTimer() {
    const now = new Date().getTime();
    const diff = now - startDate;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('days').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
}
setInterval(updateTimer, 1000);

// Floating Hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    heart.style.opacity = Math.random() * 0.5 + 0.3;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 400);
