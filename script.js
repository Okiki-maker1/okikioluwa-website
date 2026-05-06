// HAMBURGER
const toggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// TYPING EFFECT
const text = ["modern websites", "business websites", "responsive websites"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function type() {
  currentText = text[i];
  
  if (!isDeleting) {
    document.getElementById("typing").textContent = currentText.substring(0, j++);
  } else {
    document.getElementById("typing").textContent = currentText.substring(0, j--);
  }

  if (!isDeleting && j === currentText.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
    setTimeout(type, 200);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

type();

// SCROLL REVEAL
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});