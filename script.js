document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  // Toggle navigation menu
  menuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active");
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          event.preventDefault();
          const targetId = this.getAttribute("href").substring(1); // Remove #
          const targetSection = document.getElementById(targetId);
          if (targetSection) {
              window.scrollTo({
                  top: targetSection.offsetTop,
                  behavior: "smooth"
              });
          }
          navMenu.classList.remove("active"); // Close menu after selection
      });
  });
});
