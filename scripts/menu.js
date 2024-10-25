addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let logo = document.querySelector('header h1 img');
    let navLinks = document.querySelectorAll('nav ul li a');
    let btn = this.document.getElementById('#R-btn');
    let menuLink = this.document.getElementById('menu')


    // Check the scroll position
    if (scrollY > 50) {
        // Add a class to the header when scrolled
        header.classList.add('fixed-header-scrolled');
        // Change the logo source to the second one
        logo.src = 'images/logo-black.png';

        // Change the color of nav links to black
        navLinks.forEach(link => {
            link.style.color = '#000';
        });
    } else {
        // Remove the class when scrolled back to the top
        header.classList.remove('fixed-header-scrolled');
        // Change the logo source back to the original one
        logo.src = 'images/logo.png';

        // Change the color of nav links back to white
        navLinks.forEach(link => {
            link.style.color = '#ffffff';
        });
    }
    menuLink.style.color = '#fbc31b';
});

// Add hover effect to nav links
let navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('mouseover', function () {
        // Change the color on hover
        this.style.color = '#fbc31b';
    });

    link.addEventListener('mouseout', function () {
        // Reset the color when not hovered
        this.style.color = scrollY > 50 ? '#000000' : '#ffffff';
    });
});

