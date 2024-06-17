// script.js

document.addEventListener("DOMContentLoaded", function() {
    // Mobile menu toggle
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function() {
            console.log('Menu toggle clicked');
            menu.classList.toggle('active');
        });
    }

    // Smooth scroll
    const links = document.querySelectorAll('nav a, .h-text a');

    for (const link of links) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const offsetTop = targetElement.offsetTop;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                } else {
                    console.log(`Element with id ${href} not found`);
                }
            }
        });
    }
});

