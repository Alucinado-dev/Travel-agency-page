const themeTogglerBtn = (toggle, body) => {
    toggle.addEventListener('change', (e) =>{
        const isChecked = e.target.checked;
        body.classList.toggle('dark', isChecked);
    });
}

const changeImageDocument = (element, imgSrc) => { 
    element.src = imgSrc; 
}

const changeImageStylesheet = (root, newImg) => {
    root.style.setProperty('--hero-img', `var(--hero-img-${newImg})`);
}

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

const aboutImgChange = (element, isHover) =>{
    if(isHover){
        element.src = 'travel2.jpg'
    }else{
        element.src = 'travel1.jpg'
    }
}

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

const isNameValid = (name) =>{
    if(name.length >= 3){
        return true;
    }else{
        return false;
    }
}

const isEmailValid = (email) =>{
    if(email.includes('@')){
        return true;
    }else{
        return false;
    }
}

const isMessageValid = (message) =>{
    if(message.length >= 10){
        return true;
    }else{
        return false;
    }
}

const invalidInputWarning = (whatInput) =>{
    const warning = document.createElement('p');
    warning.textContent = `Invalid ${whatInput}`;
    warning.style.color = 'red';
    warning.style.fontSize = '12px';
    warning.style.marginTop = '5px';
    return warning;
    
}

const removeInvalidInputWarning = (element) =>{
    const warning = element.nextElementSibling;
    if(warning && warning.tagName === 'P'){
        warning.remove();
    }
}

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




