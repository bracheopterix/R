
let header = document.getElementById('headerbox');
let avatar = document.getElementById('headerbox-inner-avatarbox')

console.log("it`s ok");



window.onscroll = function () { scrollFunction() };


function scrollFunction() {
  
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.toggle ("mini");
        avatar.classList.toggle ("mini");
    }
    else {
        header.classList.toggle ("mini");
        avatar.classList.toggle ("mini");
    }
} 

