// observes the HTML section elements and performs an animation on scroll
const observer = new IntersectionObserver((entries => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}));

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

document.addEventListener('DOMContentLoaded', function () {
    // Check if the page was reloaded
    if (performance.navigation.type === 1) {
        // Page was reloaded, fade in the element
        var fadeInElement = document.getElementById('fadeInElement');
        fadeInElement.style.display = 'block';  // Show the element
        fadeInElement.style.opacity = '1';      // Set opacity to 1 for the fade-in effect
    }

    var scrollButton = document.getElementById('scrollButton');
    var scrollSection = document.getElementById('scrollSection');

    scrollButton.addEventListener('click', function () {
        scrollSection.scrollIntoView({ behavior: 'smooth' });
    });
});
