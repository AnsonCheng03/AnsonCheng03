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

gsap.to(".Project .sectionTitle", {
  top: "35vh",
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".Project",
    scrub: true,
    start: "top",
    end: "25%  -50%",
  },
});

gsap.from(".Project .sectionTitle .imageContainer", {
  height: "150vh",
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".Project",
    scrub: true,
    start: "top  -50%",
    end: "25%",
  },
});

gsap.to(".Project .sectionTitle h1", {
  autoAlpha: 0,
  y: -100,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".Project",
    scrub: true,
    start: "top -50%",
    end: "25%",
  },
});
