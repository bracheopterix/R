
let header = document.getElementById('headerbox');
let avatar = document.getElementById('headerbox-inner-avatar-img')
let menuButton = document.getElementById('headerbox-inner-menu-button')

console.log("it`s ok");

window.onscroll = function () { scrollFunction() };


function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.maxHeight =  "3em";
        header.style.padding =  "0 20em 0 20em";
        avatar.style.height = "3em";
        avatar.style.width = "3em";
        menuButton.style.height = "3em";
        menuButton.style.width = "3em";
        menuButton.style.top = "0";

    }
    else {
        header.style.maxHeight =  "fit-content";
        header.style.padding =  "5em 20em 5em 20em";
        avatar.style.height = "8em";
        avatar.style.width = "8em";
        menuButton.style.height = "8em";
        menuButton.style.width = "8em";
        menuButton.style.top = "5em";
    }
} 

// function scrollFunction2() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         header.classList.add('headerbox_mini');
//         avatar.classList.add('headerbox-inner-avatar_mini')
//     }
//     else {
//         header.classList.remove('headerbox_mini');
//         avatar.classList.remove('headerbox-inner-avatar_mini')
//     }
// } 