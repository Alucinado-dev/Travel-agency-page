/* faz a mudança do estado de botão theme, entre checked e não checked */
const themeTogglerBtn = (toggle, body) => {
    toggle.addEventListener('change', (e) =>{
        const isChecked = e.target.checked;
        body.classList.toggle('dark', isChecked);
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
        changeImageDocument(element, 'travel2.jpg');
    }else{
        changeImageDocument(element, 'travel1.jpg');
    }
}

/* define funcionalidade e parametros da library swiper.js */
const swiperFunction = (swiper) =>{
    const swiperElement = new Swiper(swiper, {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        },
      });
}

/* validação do input nome */
const isNameValid = (name) =>{
    if(name.length >= 3){
        return true;
    }else{
        return false;
    }
}

/* validação do input email  */
const isEmailValid = (email) =>{
    if(email.includes('@')){
        return true;
    }else{
        return false;
    }
}

/* validação do input mensagem */
const isMessageValid = (message) =>{
    if(message.length >= 10){
        return true;
    }else{
        return false;
    }
}

/* constrói resposta visual caso o input seja inválido */
const invalidInputWarning = (whatInput, errorMessage) =>{
    const warning = document.createElement('p');
    warning.textContent = `Invalid ${whatInput}, ${errorMessage}`;
    warning.style.color = 'red';
    warning.style.fontSize = '12px';
    warning.style.marginTop = '5px';
    return warning;
    
}

/* remove mensagem de input visual */
const removeInvalidInputWarning = (element) =>{
    const warning = element.nextElementSibling;
    if(warning && warning.tagName === 'P'){
        warning.remove();
    }
}

/* verifica validações de todo o formulário */
const formValidation = (name, email, message) =>{
    const nameInput = document.getElementById(name);
    const emailInput = document.getElementById(email);
    const messageInput = document.getElementById(message);
    const nameIsValid = isNameValid(nameInput.value);
    const emailIsValid = isEmailValid(emailInput.value);
    const messageIsValid = isMessageValid(messageInput.value);

    if(!nameIsValid){
        removeInvalidInputWarning(nameInput);
        nameInput.after(invalidInputWarning('name'));
    }else{
        removeInvalidInputWarning(nameInput);
    }

    if(!emailIsValid){
        removeInvalidInputWarning(emailInput);
        emailInput.after(invalidInputWarning('email'));
    }else{
        removeInvalidInputWarning(emailInput);
    }

    if(!messageIsValid){
        removeInvalidInputWarning(messageInput);
        messageInput.after(invalidInputWarning('message'));
    }else{
        removeInvalidInputWarning(messageInput);
    }

    if(nameIsValid && emailIsValid && messageIsValid){
        return true;
    }else{
        return false;
    }
}




