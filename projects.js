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
  width: "110vw",
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".Project",
    scrub: true,
    start: `15% 20%`,
    end: "25%",
  },
});

// gsap.to(".Project .sectionTitle h1", {
//   autoAlpha: 0,
//   y: -100,
//   ease: "power2.inOut",
//   scrollTrigger: {
//     trigger: ".Project",
//     scrub: true,
//     start: `10% 15%`,
//     end: "20%",
//   },
// });

gsap.from(".Project .projectDescription", {
  autoAlpha: 0,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".Project",
    scrub: true,
    start: `22%`,
    end: "27.5%",
  },
});
