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

//* New Scroller logic

const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

