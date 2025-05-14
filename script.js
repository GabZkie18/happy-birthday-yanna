document.getElementById('surpriseBtn').addEventListener('click', () => {
  const surprise = document.getElementById('surprise');
  // Remove hidden class to show the surprise
  surprise.style.display = 'flex';  // This will ensure the surprise is shown
  const song = document.getElementById('birthdaySong');
  if (song) song.play();

  // Hide the button once it's clicked
  document.getElementById('surpriseBtn').style.display = 'none';
  triggerConfetti();

  // Slideshow logic (same as previous code)
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;
  let slideshowInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  }

  // Auto slideshow every 5 seconds
  slideshowInterval = setInterval(nextSlide, 5000);

  // Manual controls
  document.getElementById('nextSlide').addEventListener('click', () => {
    nextSlide();
    resetSlideshowTimer();
  });

  document.getElementById('prevSlide').addEventListener('click', () => {
    prevSlide();
    resetSlideshowTimer();
  });

  function resetSlideshowTimer() {
    clearInterval(slideshowInterval);
    slideshowInterval = setInterval(nextSlide, 5000);
  }

  // Show first slide
  showSlide(currentSlide);
});

// 🎶 Music Control (Mute/Unmute)
const musicBtn = document.getElementById('musicBtn');
const song = document.getElementById('birthdaySong');

musicBtn.addEventListener('click', () => {
  if (song.paused) {
    song.play();
    musicBtn.textContent = "🔊 Mute Music";  // Update button text
  } else {
    song.pause();
    musicBtn.textContent = "🔇 Unmute Music";  // Update button text
  }
});

// 🎉 Confetti Effect Function
function triggerConfetti() {
  const colors = ["#FFC0CB", "#FF69B4", "#FFD700", "#ADFF2F", "#87CEFA", "#FFB6C1"];
  const numberOfConfetti = 100; // You can change this for more/less confetti

  for (let i = 0; i < numberOfConfetti; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = `${Math.random() * 100}vw`;
    confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.appendChild(confetti);
  }
}

// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('nav');

hamburger.addEventListener('click', () => {
  navbar.classList.toggle('navbar-active');
});
