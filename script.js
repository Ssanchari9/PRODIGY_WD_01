window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    var scrolled = window.scrollY;

    if (scrolled > 50) {
        navbar.style.backgroundColor = 'white';
        navbar.style.color = 'pink';
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.backgroundColor = 'pink';
        navbar.style.color = 'white';
        navbar.style.boxShadow = 'none';
    }
});
