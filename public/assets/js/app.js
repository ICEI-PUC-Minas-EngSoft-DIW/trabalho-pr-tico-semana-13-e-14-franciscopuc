// Função da nav
const menuList         = document.getElementById("menuList");
const burger           = document.querySelector(".hamburguer a");
const overlay          = document.getElementById("menuOverlay");
const hamburgerWrapper = document.querySelector(".hamburguer");

function setMenu(isOpen) {
    menuList.classList.toggle("open", isOpen);
    if (overlay) overlay.classList.toggle("active", isOpen);

    if (hamburgerWrapper) {
        hamburgerWrapper.classList.toggle("menu-open", isOpen);
    }
}

// mantém a função chamada no onclick do HTML
function toggleMenu() {
    const isOpen = menuList.classList.contains("open");
    setMenu(!isOpen);
    let x = document.querySelector("nav ul");
    x.style.transition = "transform 0.5s ease";
}

// fecha ao clicar em qualquer <li>
menuList.addEventListener("click", (event) => {
    if (event.target.closest("li")) {
        setMenu(false);
    }
});

// fecha ao clicar fora (overlay)
if (overlay) {
    overlay.addEventListener("click", () => setMenu(false));
}

document.querySelector(".mobile-logout").addEventListener("click", () => {
    sessionStorage.setItem('isLoggedIn', '0');   // armazenando como string
});
