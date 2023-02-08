document.addEventListener('scroll', () => {
    document.documentElement.dataset.scroll = window.scrollY;
});

document.documentElement.dataset.scroll = 0