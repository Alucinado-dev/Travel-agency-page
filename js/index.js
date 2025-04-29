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
const savedTheme = getSavedTheme();

/* define estado de botão themeToggle baseado no tema salvo em browser  */
if (savedTheme) {
    root.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') { 
        themeToggle.checked = true;
    }
} else {
    /* define ligth como tema padrão caso não haja tema salvo */
    root.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
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
if (!header.classList.contains('hidden')) { 
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

/* gerencia mudança de classes nos elementos hidden */
if (hiddenElements.length > 0) {
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
} else {
    console.warn("No elements with class 'hidden' found for Intersection Observer.");
}




