const btCloseSign = document.querySelector(".sign-Modal__form-close");
const signScreen = document.querySelector(".sign-Modal__bg");
const btOpenSign = document.querySelector(".header__nav-sign");


btCloseSign.addEventListener("click", evento =>{
    evento.preventDefault();
    signScreen.classList.add("desativado");
});

btOpenSign.addEventListener("click", evento =>{
    evento.preventDefault();
    signScreen.classList.remove("desativado");
});