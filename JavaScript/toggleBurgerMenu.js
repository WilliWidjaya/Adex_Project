
function toggleBurgerMenu() {

    let menu = document.getElementById("toggle");

    if(menu.style.opacity ==  1 ) {
        menu.style.opacity =  0;
        menu.style.pointerEvents = "none";
    } else if (menu.style.opacity == 0) {
        menu.style.opacity =  1;
        menu.style.pointerEvents = "all";
    }
}
