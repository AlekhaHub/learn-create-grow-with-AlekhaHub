// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Simple dynamic footer year
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer p");
  if (footer) footer.innerHTML = `&copy; ${new Date().getFullYear()} AlekhaHub — Learning • Creativity • Growth`;
});
