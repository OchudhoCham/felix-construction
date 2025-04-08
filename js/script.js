  
 // Toggle the active class on the menu-toggle button
document.getElementById("menu-toggle").addEventListener("click", function() {
  this.classList.toggle("active");
});
 
  // Get the menu toggle button and navbar
const menuToggle = document.querySelector('.menu-toggle');
const navbar = document.querySelector('.site-nav');

// Toggle the menu visibility
menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
