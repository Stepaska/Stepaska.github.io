function humburgerKlick() {
    $(".mobile-menu").slideToggle(500);
}

function moreKlick(event, num) {
    num = num || "";
    var mobileMenu = document.querySelector(".item-window" + num);
   var display = mobileMenu.style.display;
   if (display == "" || display == "none") {
    $(".item-window"+num).fadeIn(500);
        mobileMenu.style.display = "flex";
   }else{
    $(".item-window").fadeOut(500);
   }

}

var humburgerIcon = document.getElementsByClassName("menu-icon") [0];
humburgerIcon.addEventListener("click", humburgerKlick ) ;

var a = document.getElementsByClassName("item-close")[0];
a.addEventListener("click", moreKlick ) ;

$(".card-button.one").click(
    function (event) {
        moreKlick(event, ".one")
    }
)

$(".card-button.two").click(
    function (event) {
        moreKlick(event, ".one")
    }
)