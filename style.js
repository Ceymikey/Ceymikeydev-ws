// observes the html section elements and performs a animation on scroll
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
hiddenElements.forEach((el) => observer.observe(el))

document.addEventListener('DOMContentLoaded', function () {
    var scrollButton = document.getElementById('scrollButton');
    var scrollSection = document.getElementById('scrollSection');

    scrollButton.addEventListener('click', function () {
        scrollSection.scrollIntoView({ behavior: 'smooth' });
    });
});