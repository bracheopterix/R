
let header = document.getElementById('headerbox');
let avatar = document.getElementById('headerbox-inner-avatar-img')
let menuButton = document.getElementById('headerbox-inner-menu_button')

console.log("it`s ok");

window.onscroll = function () { scrollFunction() };


function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        header.classList.toggle ("headerbox-inner_mini");
        // header.style.maxHeight =  "3em";
        // header.style.padding =  "0 20em 0 20em";
        // avatar.style.height = "3em";
        // avatar.style.width = "3em";
        // menuButton.style.height = "3em";
        // menuButton.style.width = "3em";
        // menuButton.style.top = "0";
        // menuButton.style.backgroundSize = "3em";
        // menuButton.style.opacity ="1";

    }
    else {
        header.classList.toggle ("headerbox-inner_mini");
        // header.style.maxHeight =  "fit-content";
        // header.style.padding =  "5em 20em 5em 20em";
        // avatar.style.height = "8em";
        // avatar.style.width = "8em";
        // menuButton.style.height = "8em";
        // menuButton.style.width = "8em";
        // menuButton.style.top = "5em";
    }
} 

