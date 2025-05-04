
const root = document.documentElement;
const header = document.querySelector('header');
const mainTitle = document.getElementsByTagName('h1')[0];

const hiddenElements = document.querySelectorAll('.hidden');
const navLinks = document.querySelectorAll('.nav-link');

const themeToggle = document.getElementById('theme-toggle');
const ToggleIcon = document.getElementById('toggle-icon');
const btnBurguer = document.getElementById('btn-burguer');
const sidebar = document.getElementById('mobile-sidebar');
const closeSidebar = document.getElementById('close-sidebar');
const menu = document.getElementById('menu');
const aboutImg = document.getElementById('travel-img');
const destiniesContainer = document.getElementById('destinies-container');
const feedbacksContainer = document.getElementById('feedbacks-cards');
const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const messageInput = document.getElementById('message-input');


const savedTheme = getSavedTheme();

/* define estado de botão themeToggle baseado no tema salvo em browser  */
if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') { 
        themeToggle.checked = true;
    } else {
        themeToggle.checked = false;
    }

} else {
    /* define ligth como tema padrão caso não haja tema salvo */
    root.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
}



themeTogglerBtn(themeToggle, root, ToggleIcon); /* deixa botão theme disponível */
heroImgChange(root, 3000, 14); /* faz a mudança da hero image */


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
    const isValid = formValidation(nameInput,emailInput, messageInput);
    if(isValid){
        const successMsg = document.createElement('p');
        successMsg.id = 'form-success-message';
        successMsg.textContent = 'Obrigado pelo contato! Sua mensagem foi enviada.';
        form.after(successMsg);

        resetForm(nameInput, emailInput, messageInput);
        setTimeout(removeSuccessMessage, 5000);
    }
});

/* quando a tela é menor que 900px a sidebar fica disponivel*/
btnBurguer.addEventListener('click', () =>{
    sidebar.classList.add('show');
});

closeSidebar.addEventListener('click', () =>{
    sidebar.classList.remove('show');
});






/* gerencia mudança de classes nos navLinks */
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
    });
});


/* gerencia mudança de estilos na header baseado no scroll */
if (!header.classList.contains('show')) { 
    hideHeader(header); 
}

let lastScrollY = window.scrollY;


window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    /* Condição para MOSTRAR (showHeader): Rolando PARA CIMA e não está no topo absoluto */
    if (currentScrollY < lastScrollY) {
        showHeader(header); 
    }
    /* Condição para ESCONDER (hideHeader): Rolando PARA BAIXO ou está no topo absoluto */
    else if (currentScrollY > lastScrollY) {
        hideHeader(header); 
    }

    /* evita valores negativos (acontece em alguns browsers) */
    lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
});

document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger, TextPlugin); 
    scrollFade(hiddenElements); /* deixa scroll fade disponivel */
    titleAnimation(mainTitle);
});

/* configuraçoes para o swiper em destinies */
const destiniesSwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 100,
    effect: 'coverflow',
    speed: 1200,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    parallax: true,

    coverflowEffect: {
        rotate: 60,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },



    autoplay: {
        delay: 10000,
        disableOnInteraction: false,
    },

    pagination: {
        el: `.swiper-pagination`,
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: `.swiper-button-next`,
        prevEl: `.swiper-button-prev`,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    mousewheel: {
        sensitivity: 0.5,
        releaseOnEdges: true,
        invert: true,
    },


};

const destiniesSwiper = initializeSwiper(destiniesContainer, destiniesSwiperOptions);

/* configurações para o swiper em feedback */
const feedbacksSwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 100,
    effect: 'slide',
    speed: 700,
    rewind: true,
    grabCursor: false,
    parallax: true,

    flipEffect: {
        slideShadows: true,
        limitRotation: true,

    },
    

    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },


    navigation: {
        nextEl: `.swiper-button-next`,
        prevEl: `.swiper-button-prev`,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    mousewheel: {
        sensitivity: 0.5,
        releaseOnEdges: true,
        invert: true,
    },


};

const feedbacksSwiper = initializeSwiper(feedbacksContainer, feedbacksSwiperOptions);