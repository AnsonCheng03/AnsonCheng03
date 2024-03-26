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
  width: "50vw",
  scrollTrigger: {
    trigger: ".Project",
    scrub: true,
    start: "20%",
    end: "25%",
  },
});

gsap.from(".Project .sectionTitle  .case", {
  width: "115vw",
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".Project",
    scrub: true,
    start: `5% 20%`,
    end: "25% 25%",
  },
});

gsap.to(".Project .sectionTitle .titleContainer h1", {
  fontSize: "1.5rem",
  padding: "1rem 0",
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".Project",
    scrub: true,
    start: `5% 20%`,
    end: "25%",
  },
});

gsap.to(".Project .sectionTitle .titleContainer", {
  autoAlpha: 0,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".Project",
    scrub: true,
    start: `22%`,
    end: "25%",
  },
});

gsap.to(".Project .sectionTitle  .titleContainer h1", {
  y: 50,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".Project",
    scrub: true,
    start: `22%`,
    end: "25%",
  },
});

gsap.from(".Project .projectDescription", {
  autoAlpha: 0,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".Project",
    scrub: true,
    start: `22%`,
    end: "23%",
  },
});

gsap.to(".Project .sectionTitle", {
  rotate: 90,
  // padding: "25vh 45vw 0 25vw",
  padding: "0 25vw",
  scale: 1.5,
  right: 0,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".rotatePhone",
    scrub: true,
    start: "top bottom",
    end: "bottom top",
    pin: true,
  },
});

gsap.to(".Project .sectionTitle .endPopUpContainer", {
  autoAlpha: 1,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".rotatePhone",
    scrub: true,
    start: "top bottom",
    end: "bottom-=10% top",
  },
});
