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

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  window.addEventListener("resize", handleScroll);

  fadeElement.classList.add("fade-in");
});

const scrollers = document.querySelectorAll(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);

    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

