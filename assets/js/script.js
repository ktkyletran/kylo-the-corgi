const navMenu = document.getElementById('nav-menu');
const toggleMenu = document.getElementById('nav-toggle');
const closeMenu = document.getElementById('nav-close');

// Display menu
toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
})

// Close menu
closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show');
})

// Remove menu on link click
const navLink = document.querySelectorAll ('nav-link');

function clickLink() {
    navMenu.classList.remove('show');
}

navLink.forEach(n => n.addEventListener('click', clickLink));

// Scroll sections
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
        }
        else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    })
}