document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll('#experiments .slide');
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  showSlide(currentIndex);
  setInterval(nextSlide, 5000);
});

const backToTop = document.getElementById("backToTop");

if (backToTop) {
  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
      backToTop.style.display = "block";
    } else {
      backToTop.style.display = "none";
    }
  });
  backToTop.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // smooth scroll effect
    });
  });

}

const video = document.getElementById('heroVideo');

function toggleVideoControls() {
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    video.controls = true;  // Show controls on mobile
  } else {
    video.controls = false; // Hide controls on desktop
  }
}

toggleVideoControls();
