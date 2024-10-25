addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let logo = document.querySelector('header h1 img');
    let navLinks = document.querySelectorAll('nav ul li a');
    let btn = this.document.getElementById('#R-btn');
    let homeLink = this.document.getElementById('home')


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
    homeLink.style.color = '#fbc31b';
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

// script.js

// script.js

// Function to handle menu changes
function changeMenu(menuId, link) {
    // Hide all menu sections
    document.querySelectorAll('.menus-1, .menus-2, .menus-3, .menus-4').forEach(menu => {
        menu.style.display = 'none';
    });

    // Display the selected menu section
    document.querySelector('.' + menuId).style.display = 'flex';

    // Remove 'active-menu' class from all links
    document.querySelectorAll('.menu-icons ul li a').forEach(menuLink => {
        menuLink.classList.remove('active-menu');
    });

    // Add 'active-menu' class to the clicked link
    link.classList.add('active-menu');
}

// Attach onclick events to menu links
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.menu-icons ul li a').forEach(menuLink => {
        menuLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default behavior of the link
            var menuId = this.getAttribute('href').substring(1); // Extract the menuId from the href attribute
            changeMenu(menuId, this); // Call the changeMenu function with the selected menuId and the clicked link
        });
    });
});

