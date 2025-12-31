let currentLetter = 1;

function startJourney() {
  document.getElementById('landing').classList.remove('active');
  setTimeout(() => {
    document.getElementById('letter1').classList.add('active');
  }, 600);
}

function openLetter(num) {
  const envelope = document.querySelector(`#letter${num} .flap`);
  envelope.style.transform = 'translateY(-100px) rotateX(180deg)';
  
  setTimeout(() => {
    document.getElementById(`content${num}`).classList.add('active');
  }, 900);
}

function nextLetter(nextNum) {
  document.getElementById(`content${currentLetter}`).classList.remove('active');
  currentLetter = nextNum;
  setTimeout(() => {
    document.getElementById(`letter${nextNum}`).classList.add('active');
  }, 600);
}

function goBack() {
  document.getElementById(`content${currentLetter}`).classList.remove('active');
  setTimeout(() => {
    document.getElementById(`letter${currentLetter}`).classList.add('active');
    // Reset flap
    document.querySelector(`#letter${currentLetter} .flap`).style.transform = 'none';
  }, 600);
}
