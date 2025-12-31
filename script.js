let currentScreen = 1;

function next(n) {
  document.getElementById("screen" + currentScreen).classList.remove("active");
  document.getElementById("screen" + n).classList.add("active");
  currentScreen = n;

  if(n === 2) typeLetter();
}

// Typewriter Letter
const letterLines = [
  "Sometimes I just sit and think about you…",
  "how calm you make everything feel.",
  "Even the simplest day feels brighter with you.",
  "I wanted to make a little place just for us."
];

let lineIndex = 0;
let charIndex = 0;

function typeLetter() {
  const p = document.getElementById("letterText");
  if(lineIndex < letterLines.length) {
    const line = letterLines[lineIndex];
    if(charIndex < line.length) {
      p.innerHTML += line.charAt(charIndex);
      charIndex++;
      setTimeout(typeLetter, 50);
    } else {
      p.innerHTML += "<br>";
      lineIndex++;
      charIndex = 0;
      setTimeout(typeLetter, 500);
    }
  } else {
    document.getElementById("letterNext").style.display = "inline-block";
  }
}

// Memory Cards
function revealMessage(card) {
  if(card.classList.contains("revealed")) return;
  card.classList.add("revealed");
  if(card.innerText === "One thing I love about you") card.innerText = "Your laugh, it’s my favorite song.";
  else if(card.innerText === "One thing that makes me smile") card.innerText = "The way you care, even for the little things.";
  else if(card.innerText === "A moment I’ll never forget") card.innerText = "Every late-night call we had when I felt far, but close to you.";
}

// Popup Letters
function showPopup() {
  const popup = document.getElementById("popup");
  popup.style.display = "flex";
  const letter = popup.querySelector(".popupLetter");
  letter.classList.remove("openLetter");
  void letter.offsetWidth;
  letter.classList.add("openLetter");
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  next(8);
}
