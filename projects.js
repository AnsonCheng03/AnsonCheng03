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

gsap.from(".Project .sectionTitle .imageContainer .case", {
  width: "115vw",
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".Project",
    scrub: true,
    start: `5% 20%`,
    end: "25%",
  },
});

gsap.to(".Project .sectionTitle h1", {
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

gsap.to(".Project .sectionTitle h1", {
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
