// script.js

// Target date for the engagement
const targetDate = new Date("April 12, 2024 20:00:00").getTime();

// Update the countdown every second
const interval = setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("countdown").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(interval);
    document.getElementById("countdown").innerHTML = "It's time to get engaged!";
  }
}, 1000);

// Fade-in animation for photos
const photos = document.querySelectorAll('.your-photo, .partner-photo');
photos.forEach(photo => {
  photo.style.animation = "photo-fade-in 2s ease forwards";
});

// Generate confetti
const confettiContainer = document.getElementById("confetti");
for (let i = 0; i < 100; i++) {
  const confetti = document.createElement("div");
  confetti.className = "confetti";
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
  confettiContainer.appendChild(confetti);
}
