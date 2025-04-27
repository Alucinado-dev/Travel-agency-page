themeTogglerBtn(toggle, body);
const root = document.documentElement;
const heroImg = document.getElementById('hero-img');
const aboutImg = document.getElementById('about-img');
const swiper = '.swiper';
const form = document.getElementById('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

heroImgChange(root, 3000, 7);

aboutImg.addEventListener('mouseover', () =>{
    aboutImgChange(aboutImg, true);
});

aboutImg.addEventListener('mouseout', () =>{
    aboutImgChange(aboutImg, false);
});

swiperFunction(swiper);

form.addEventListener('submit', (e) =>{
    e.preventDefault();
    const isValid = formValidation('name', 'email', 'message');
    if(isValid){
        alert('Form submitted successfully!');
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
});

const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});

const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const themeToggleLabel = document.querySelector('.theme-toggle-label');
themeToggleLabel.addEventListener('click', () => {
    if (toggle.checked) {
        themeToggleLabel.textContent = 'Dark';
    } else {
        themeToggleLabel.textContent = 'Light';
    }
});

if (toggle.checked) {
    themeToggleLabel.textContent = 'Dark';
    body.classList.add('dark');
} else {
    themeToggleLabel.textContent = 'Light';
    body.classList.remove('dark');
}
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const hiddenLeftElements = document.querySelectorAll('.hidden-left');
hiddenLeftElements.forEach((el) => observer.observe(el));

const hiddenRightElements = document.querySelectorAll('.hidden-right');
hiddenRightElements.forEach((el) => observer.observe(el));

const hiddenBottomElements = document.querySelectorAll('.hidden-bottom');
hiddenBottomElements.forEach((el) => observer.observe(el));

const hiddenTopElements = document.querySelectorAll('.hidden-top');
hiddenTopElements.forEach((el) => observer.observe(el));

const hiddenScaleElements = document.querySelectorAll('.hidden-scale');
hiddenScaleElements.forEach((el) => observer.observe(el));

const hiddenOpacityElements = document.querySelectorAll('.hidden-opacity');
hiddenOpacityElements.forEach((el) => observer.observe(el));

const hiddenRotateElements = document.querySelectorAll('.hidden-rotate');
hiddenRotateElements.forEach((el) => observer.observe(el));

const hiddenSlideElements = document.querySelectorAll('.hidden-slide');
hiddenSlideElements.forEach((el) => observer.observe(el));

const hiddenFadeElements = document.querySelectorAll('.hidden-fade');
hiddenFadeElements.forEach((el) => observer.observe(el));

const hiddenZoomElements = document.querySelectorAll('.hidden-zoom');
hiddenZoomElements.forEach((el) => observer.observe(el));

