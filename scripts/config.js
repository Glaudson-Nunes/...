
const btMenuMobile1 = document.querySelector('.menu-Hamburguer');
const btMenuMobile2 = document.querySelector('.menu-Hamburguer2');
const menuMobile = document.querySelector('.menu-mobile');

btMenuMobile1.addEventListener("click",()=> abrirMmobile());
btMenuMobile2.addEventListener("click", ()=> fecharMmobile());


const abrirMmobile = () =>{

    btMenuMobile1.style.display = "none";
    btMenuMobile2.style.display = "block";
    menuMobile.style.display = "flex";
}

const fecharMmobile = () =>{

    btMenuMobile1.style.display = "block";
    btMenuMobile2.style.display = "none";
    menuMobile.style.display = "none";
}