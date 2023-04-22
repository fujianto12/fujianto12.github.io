// Togggle Class Active
const navbar = document.querySelector(".navbar-nav")

// Ketika Hamburger Menu Di Klik
document.querySelector('#menu').onclick = () => {
    navbar.classList.toggle('active')
}

// klik di luar sidebar untuk menghilangkan navbar

const hamburger = document.querySelector('#menu')
document.addEventListener('click',function (e) {
    if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active')
    }
});