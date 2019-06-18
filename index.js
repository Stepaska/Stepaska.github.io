function humburgerKlick() {
    var mobileMenu = document.getElementsByClassName("mobile-menu")[0];
   var display = mobileMenu.style.display;
   if (display == "") {
    mobileMenu.style.display = "flex"
   }else{
    mobileMenu.style.display = "";
   }

}

function moreKlick() {
    var mobileMenu = document.getElementsByClassName("item-window")[0];
   var display = mobileMenu.style.display;
   if (display == "") {
    mobileMenu.style.display = "flex"
   }else{
    mobileMenu.style.display = "";
   }

}

var humburgerIcon = document.getElementsByClassName("menu-icon") [0];
humburgerIcon.addEventListener("click", humburgerKlick ) ;


var moreIcon = document.getElementsByClassName("card-button") [1];
moreIcon.addEventListener("click", moreKlick ) ;

var a = document.getElementsByClassName("item-close")[0];
a.addEventListener("click", moreKlick ) ;