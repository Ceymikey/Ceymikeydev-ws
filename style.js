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
    if (performance.navigation.type === 1) {
        var fadeInElement = document.getElementById('fadeInElement');
        fadeInElement.style.display = 'block';
        fadeInElement.style.opacity = '1';
    }

    var scrollButton = document.getElementById('scrollButton');
    var scrollSection = document.getElementById('scrollSection');

    scrollButton.addEventListener('click', function () {
        scrollSection.scrollIntoView({ behavior: 'smooth' });
    });
});
