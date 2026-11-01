// Automatically display the current year
const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Mobile navigation menu
const menuButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuButton && navLinks) {
    menuButton.addEventListener("click", function () {
        const isOpen = navLinks.classList.toggle("active");

        menuButton.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuButton.setAttribute("aria-expanded", "false");
        });
    });
}

console.log("My Personal Portfolio is running!"); 