document.addEventListener("DOMContentLoaded", function () {
    const fadeElement = document.getElementById("fade-in-out");

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function handleScroll() {
        if (isElementInViewport(fadeElement)) {
            fadeElement.classList.add("visible");
        } else {
            fadeElement.classList.remove("visible");
        }
    }

    // Initial check on page load
    handleScroll();

    // Listen for scroll events
    window.addEventListener("scroll", handleScroll);

    // Additional check on window resize
    window.addEventListener("resize", handleScroll);

    // Add the 'fade-in' class to trigger the animation on page load
    fadeElement.classList.add("fade-in");
});
