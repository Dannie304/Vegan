addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let logo = document.querySelector('header h1 img');
    let navLinks = document.querySelectorAll('nav ul li a');
    let btn = this.document.getElementById('#R-btn');
    let galleryLink = this.document.getElementById('gallery')


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
    galleryLink.style.color = '#fbc31b';
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

const galleryButtons = document.querySelectorAll('.gallery-buttons button');
const filterImages = document.querySelectorAll('.filterable-images img');

galleryButtons.forEach((button) => {
    button.addEventListener("click", function () {
        // Remove the 'active' class from all buttons
        galleryButtons.forEach((btn) => btn.classList.remove("active"));
        // Add the 'active' class to the clicked button
        this.classList.add("active");

        // Get the category name of the clicked button
        const categoryName = this.getAttribute('data-name');

        // Filter images based on the clicked button
        filterImages.forEach((image) => {
            const imageCategories = image.getAttribute('data-name').split(' ');

            // Check if the clicked category is in the image categories
            if (categoryName === 'all' || imageCategories.includes(categoryName)) {
                image.style.display = 'flex';
            } else {
                image.style.display = 'none';
            }
        });
    });
});
