
document.addEventListener('scroll', () => {
    document.documentElement.dataset.scroll = window.scrollY;
});

if (scroll > 0) {
    console.log("i`m ok");
}