// Footer year & last modified
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Hamburger menu toggle
const menuButton = document.getElementById("menu");
const nav = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("show-nav");

  // Update button icon
  if (nav.classList.contains("show-nav")) {
    menuButton.textContent = "✖";
    menuButton.setAttribute("aria-expanded", "true");
  } else {
    menuButton.textContent = "☰";
    menuButton.setAttribute("aria-expanded", "false");
  }
});
