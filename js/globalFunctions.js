/* verifica se há tema salvo no browser */
const getSavedTheme = () => {
    if (localStorage.getItem('theme')){
        return localStorage.getItem('theme');
    }
    return null;
}


/* faz a mudança do estado de botão theme, entre checked e não checked */
const themeTogglerBtn = (toggle, root, icon ) => {
    toggle.addEventListener('change', (e) =>{
        const isChecked = e.target.checked;
        /* toggle root data-theme */
        
        if(isChecked){
            root.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
            
        }else{
            root.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        }
    });
}

/* muda o atributo src de um elemento */
const changeImageDocument = (element, imgSrc) => { 
    element.src = imgSrc; 
}

/* muda uma variável global pré definida através de números reais. */
const changeImageStylesheet = (root, newImg) => {
    root.style.setProperty('--hero-img', `var(--hero-img-${newImg})`);
}

/* chama a função changeImageStyle em um intervalo de tempo definido, por length vezes */
const heroImgChange = (element, time, length) =>{
    let i = 0;
    setInterval(() => {
        i++;
        if(i > length){
            i = 1;
        }
        changeImageStylesheet(element, i);
    }, time);
}

/* define se chama changeImageDocument dependendo do isHover */
const aboutImgChange = (element, isHover) =>{
    if(isHover){
        changeImageDocument(element, 'src/imgs/travel2.jpg');
    }else{
        changeImageDocument(element, 'src/imgs/travel1.jpg');
    }
}

/* define funcionalidade e parametros da library swiper.js */
const initializeSwiper = (selector, options = {}) =>{
    return new Swiper(selector, options)
}

/* validação do input nome */
const isNameValid = (name) =>{
    return name.length >= 3;
}

/* validação do input email  */
const isEmailValid = (email) =>{
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email); 
}

/* validação do input mensagem */
const isMessageValid = (message) =>{
    return message.length >= 10;
}

/* constrói resposta visual caso o input seja inválido */
const invalidInputWarning = (errorMessage) =>{
    const warning = document.createElement('p');
    warning.textContent =  errorMessage;
    warning.classList.add('invalid-input-warning');
    return warning;
    
}

/* remove mensagem de input visual */
const removeInvalidInputWarning = (element) =>{
    const warning = element.nextElementSibling;
    if(warning && warning.classList.contains('invalid-input-warning')){
        warning.remove();
    }
}

const removeSuccessMessage = () => {
    const successMsg = document.getElementById('form-success-message');
    if (successMsg) {
        successMsg.remove();
    }
}

/* retorna os inputs para o estado inicial com string vazia */
const resetForm = (name, email, message) =>{
    name.value = '';
    email.value = '';
    message.value = '';
}


/* verifica validações de todo o formulário */
const formValidation = (name, email, message) =>{
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = message.value.trim();

    let isFormValid = true;


    removeInvalidInputWarning(nameInput); 

    if(!isNameValid(nameValue)){
        nameInput.after(invalidInputWarning('O nome deve ter pelo menos 3 caracteres.'));
        isFormValid = false; 
    }

    removeInvalidInputWarning(emailInput); 
    if(!isEmailValid(emailValue)){
        emailInput.after(invalidInputWarning('Por favor, insira um email válido.'));
        isFormValid = false; 
    }

    removeInvalidInputWarning(messageInput); 
    if(!isMessageValid(messageValue)){
        messageInput.after(invalidInputWarning('A mensagem deve ter pelo menos 10 caracteres.'));
        isFormValid = false; 
    }

    
    return isFormValid;
}


const showHeader = (header) =>{
   if (header.classList.contains('hidden')) {
    header.classList.remove('hidden');
}
}

const hideHeader = (header) =>{
    if (!header.classList.contains('hidden')) {
        header.classList.add('hidden');
   }
}

/*  --- fade de entrada ao scrollar pra baixo  com GSAP e ScrollTrigger ---  */
const scrollFade = (hiddenElements) =>{    
    hiddenElements.forEach((element) => {
        gsap.fromTo(element, 
    
            { /* estado inicial */
                opacity: 0,
                y: 50, 
                scale: 0.95 
            },
    
            { /* estado final */
                opacity: 1,
                y: 0, 
                scale: 1, 
                duration: 0.8, 
    
                scrollTrigger: { 
                    trigger: element, 
                    start: "top 85%", 
                    toggleActions: "play none none none" 
                }
            }
        );
    });
} 

const titleAnimation = (title) =>{
    gsap.fromTo(title,
        {
            opacity: 0,
            x: 50,
        },
        
        {
            opacity: 1,
            x: 0,
            duration: 1.5,
            ease: "power3.out"
        }
    );
}
