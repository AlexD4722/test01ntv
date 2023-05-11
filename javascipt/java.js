var btnOpen = document.querySelector(".icon--open");
var btnClose = document.querySelector(".icon--close");
var navbar = document.querySelector(".navbar");
var navbarMenu = document.querySelector(".navbar__menu");
var heightNavbar = navbar.clientHeight;
var btnBuyNow = document.querySelector(".menu__btn--buyNow");

btnOpen.onclick = function(){
    btnOpen.style.display = "none";
    btnClose.style.display = "block";
    navbar.style.height = "auto";
    btnBuyNow.style.margin = "10px auto";
}
btnClose.onclick = function(){
    btnOpen.style.display = "block";
    btnClose.style.display = "none";
    navbar.style.height = "79px";
    btnBuyNow.style.margin = "";
}

