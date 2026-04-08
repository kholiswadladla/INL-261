const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const typingText = document.getElementById("typing-text");
const typingWords = [
  "Adaptable Lecturer",
  "Engagement-Based Teacher",
  "Helpful Mentor",
  "Web Programming Guide"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = typingWords[wordIndex];
  const currentText = currentWord.substring(0, charIndex);
  typingText.textContent = currentText;

  if (!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % typingWords.length;
    }
    setTimeout(typeEffect, 900);
  }
}

typeEffect();

const quotes = [
  "Don’t only know the theory — show what you can do through your work.",
  "Build your projects and let your skills speak for you.",
  "Improve your work after feedback and keep growing."
];

const rotatingQuote = document.getElementById("rotating-quote");
let quoteIndex = 0;

setInterval(() => {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  rotatingQuote.textContent = `“${quotes[quoteIndex]}”`;
}, 3000);

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();