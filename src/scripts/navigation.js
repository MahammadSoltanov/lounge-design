function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function scrollToElement(element, duration = 1000) {
  const startY = window.scrollY;
  const targetY = element.getBoundingClientRect().top + startY;
  const distance = targetY - startY;
  let startTime = null;

  function step(currentTime) {
    if (!startTime) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const eased = easeInOutQuad(progress);

    window.scrollTo(0, startY + distance * eased);

    if (timeElapsed < duration) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

const navLinks = document.querySelectorAll("[target-section]");
const sections = Array.from(navLinks).map((link) => document.getElementById(link.getAttribute("target-section")));

navLinks[0].classList.add("active");

navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const id = link.getAttribute("target-section");
    const section = document.getElementById(id);

    scrollToElement(section, 250);

    navLinks.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const currentId = entry.target.id;
        navLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("target-section") === currentId));
      }
    });
  },
  {
    root: null,
    threshold: 0,
  }
);

sections.forEach((section) => observer.observe(section));

const gallerySection = document.getElementById("gallery");
window.addEventListener(
  "scroll",
  () => {
    if (gallerySection.getBoundingClientRect().bottom < 0) {
      navLinks.forEach((link) => link.classList.remove("active"));
    }
  },
  { passive: true }
);
