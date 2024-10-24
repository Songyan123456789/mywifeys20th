const flipCards = document.querySelectorAll(".flip-card");

flipCards.forEach((card) => {
  card.addEventListener("click", function () {
    card.classList.toggle("flip");
  });
});

const audioButton = document.getElementById("audio-button");
const bgMusic = document.getElementById("bg-music");
const clickMeIndicator = document.querySelector(".click-me");

audioButton.addEventListener("click", function () {
  if (bgMusic.paused) {
    bgMusic.play();
    audioButton.textContent = "Stop Music 🔇";
    clickMeIndicator.style.display = "none";
  } else {
    bgMusic.pause();
    audioButton.textContent = "Play Music 🎵";
  }
});

clickMeIndicator.addEventListener("click", function () {
  audioButton.click();
});

function createHearts() {
  const heartContainer = document.getElementById("floating-hearts");
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "%";
    heart.style.top = Math.random() * 100 + "vh";

    // Add random animation delays and durations
    heart.style.animationDelay = Math.random() * 5 + "s";
    heart.style.animationDuration = 3 + Math.random() * 5 + "s";

    heartContainer.appendChild(heart);
  }
}
createHearts();
