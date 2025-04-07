// js/script.js

document.querySelector('.btn').addEventListener('click', () => {
    alert("We'll get in touch with you soon!");
  });
  
  // Get the menu toggle button and navbar
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.site-nav');

// Toggle the menu visibility
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
