const hamburger = document.querySelector(".penta-home__body-navbar-hamburger");
const navMenu = document.querySelector(".penta-home__body-navbar-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    if(navMenu.classList.contains("active")){
        // navMenu.style.display = "flex";
        navMenu.style.width = "450px"
    }
    else{
        // navMenu.style.display = "none";
        navMenu.style.width = "0";
    }
})

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
    }, false);