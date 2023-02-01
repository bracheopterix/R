
let header = document.getElementById('headerbox');
let avatar = document.getElementById('headerbox-inner-avatarbox')
let menuButton = document.getElementById('headerbox-inner-menu_button')

console.log("it`s ok");
console.log(avatar);

window.onscroll = function () { scrollFunction() };


function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.toggle ("mini");
        avatar.classList.toggle ("mini");
    }
    else {
        header.classList.toggle ("mini");
        avatar.classList.toggle ("mini");
        console.log(avatar, "2");
    }
} 

