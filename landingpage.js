// scroll button

const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// scroll reveal

ScrollReveal({ 
  reset: true,
  distance: '100px',
  duration: 2000,
  delay: 150
});

ScrollReveal().reveal(' .navigation,.home, .home-banner ', { origin: 'left' });
ScrollReveal().reveal('.about, .collection-heading, .collection-of-3, .sub-heading, .gallary, .for, .dress, .post, .post-heading, .post2, .post-heading2,.post3, .post-heading3, .categories-sub-heading, .newsletter, .bottom-logo, .bottom, .sociocons2, .sociocons3', { origin: 'left' });
