//Navbar

const navToggle = document.querySelector(".nav_toggle")
const navMenu = document.querySelector(".nav_menu")

navToggle.addEventListener("click", () => {    
    navMenu.classList.toggle("menu-activo");
})