gsap.from(".Project", {
  autoAlpha: 0,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".Intro",
    scrub: true,
    start: "top top",
    end: "50%",
  },
});
