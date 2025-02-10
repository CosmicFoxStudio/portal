document.addEventListener("DOMContentLoaded", function () {
    const menuHamburguer = document.querySelector(".menu-hamburguer");
    const navbar = document.querySelector(".navbar");
    menuHamburguer.addEventListener("click", function () {
        if (navbar.style.display === "flex") {
            navbar.style.display = "none";
        } else {
            navbar.style.display = "flex";
            navbar.style.flexDirection = "column";
            navbar.style.alignItems = "center";
        }
    });
});