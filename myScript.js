const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links a');  // Select all nav links

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove the 'active-link' class from all links
      navItems.forEach(link => link.classList.remove('active-link'));
      
      // Add 'active-link' to the clicked link
      item.classList.add('active-link');
      
      // Optionally, you can close the menu after clicking a link
      navLinks.classList.remove('active');  // This will hide the menu on mobile after clicking a link
    });
  });