// Blossom Flower Shop
// Automatic Image Slider

let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

// Hide all slides
function hideSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
}

// Show current slide
function showSlide() {
    hideSlides();
    slides[currentSlide].classList.add("active");
}

// Change slide every 3 seconds
function nextSlide() {
    currentSlide++;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    showSlide();
}

// Show first slide
showSlide();

// Start automatic slider
setInterval(nextSlide, 3000);