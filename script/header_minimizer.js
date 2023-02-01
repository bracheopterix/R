
let header = document.getElementById('headerbox');
let avatar = document.getElementById('headerbox-inner-avatarbox')

console.log("it`s ok");



window.onscroll = function () { scrollFunction() };


function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        header.classList.add ("mini");
        avatar.classList.add ("mini");
    }
    else {
        header.classList.remove ("mini");
        avatar.classList.remove ("mini");
    }
} 

