  
  // Get the menu toggle button and navbar
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.site-nav');

// Toggle the menu visibility
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
