const root = document.documentElement;
const header = document.querySelector('header');

const hiddenElements = document.querySelectorAll('.hidden');
const navLinks = document.querySelectorAll('.nav-link');

const themeToggle = document.getElementById('theme-toggle');
const aboutImg = document.getElementById('travel-img');
const menu = document.getElementById('menu');
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const messageInput = document.getElementById('message-input');

// const swiper = '.swiper';


/* define estado de botão themeToggle baseado no tema salvo em browser  */
if (getSavedTheme() === 'dark') {
    themeToggle.checked = true;
}

root.setAttribute('data-theme', localStorage.getItem('theme'));


themeTogglerBtn(themeToggle, root); /* deixa botão theme disponível */
heroImgChange(root, 3000, 7); /* faz a mudança da hero image */
// swiperFunction(swiper); /* deixa o swiper disponível */

/* chama função aboutImgChange dependendo se o mouse está no elemento ou não */
aboutImg.addEventListener('mouseover', () =>{
    aboutImgChange(aboutImg, true);
});

aboutImg.addEventListener('mouseout', () =>{
    aboutImgChange(aboutImg, false);
});


/* define novo comportamento para o formulário */
form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const isValid = formValidation('name', 'email', 'message');
    if(isValid){
        alert('Form submitted successfully!');
        resetForm(nameInput, emailInput, messageInput);
    }
});

/* deixa disponível menu lateral */
/* const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
}); */


/* gerencia mudança de classes nos navLinks */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});


/* gerencia mudança de estilos na header baseado no scroll */
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        showHeader(header);
    } else {
        hideHeader(header);
    }
});

/* gerencia mudança de classes nos elementos hidden */
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

hiddenElements.forEach((el) => observer.observe(el));



