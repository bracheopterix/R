
let header = document.getElementById('headerbox');
let avatar = document.getElementById('headerbox-inner-avatarbox')
let mainInner = document.getElementById('main-inner');


console.log(mainInner);



window.onscroll = function () { scrollFunction() };


// function scrollFunction() {
//     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//         header.classList.add ("mini");
//         avatar.classList.add ("mini");
//         console.log("added a class");
//     }
//     else {
//         header.classList.remove ("mini");
//         avatar.classList.remove ("mini");
//         console.log("deleted a class");
//     }
// } 

function scrollFunction() {
     if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    
        header.classList.add ("mini");
        avatar.classList.add ("mini");
        console.log("added a class");
    }
    else {
        header.classList.remove ("mini");
        avatar.classList.remove ("mini");
        console.log("deleted a class");
    }
} 