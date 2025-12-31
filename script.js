const letterContent = {
    1: "I was looking back at our photos today. Every time I see your smile, I'm reminded of why this year was so special. You are my favorite part of every day.",
    2: "Thank you for being my rock. Even on the days when things felt heavy, your voice was the only thing that could instantly make everything better.",
    3: "I've learned so much about love just by being with you. You make me want to be the best version of myself, today and every day after."
};

let lettersOpened = 0;

function nextSection(id) {
    document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    window.scrollTo(0,0);
}

function openLetter(num) {
    const overlay = document.getElementById('overlay');
    const content = document.getElementById('popup-content');
    content.innerText = letterContent[num];
    overlay.style.display = 'block';
    setTimeout(() => overlay.classList.add('active'), 10);
    
    // Track progress to show the final button
    lettersOpened++;
    if(lettersOpened >= 3) {
        document.getElementById('finalBtn').classList.remove('hidden');
    }
}

function closeLetter() {
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('active');
    setTimeout(() => overlay.style.display = 'none', 400);
}
