
let header = document.getElementById('headerbox');
let avatar = document.getElementById('headerbox-inner-avatar-img')

console.log("it`s ok");

window.onscroll = function () { scrollFunction2() };


function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.maxHeight =  "3em";
        header.style.padding =  "0 20em 0 20em";
        avatar.style.height = "3em";
        avatar.style.width = "3em";

    }
    else {
        header.style.maxHeight =  "fit-content";
        header.style.padding =  "5em 20em 5em 20em";
        avatar.style.height = "8em";
        avatar.style.width = "8em";
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