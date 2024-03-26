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

// gsap.to(".Project .sectionTitle", {
//   top: "100vh",
//   ease: "power2.inOut",
//   scrollTrigger: {
//     trigger: ".rotatePhone", // Set the trigger to ".Project" element
//     scrub: true,
//     start: "bottom bottom", // Animation starts when the bottom of ".Project .case" aligns with the bottom of ".Project"
//     end: "+=20% +=25%", // Animation ends when the top of ".Project .case" aligns with the top of ".Project"
//     markers: true,
//   },
// });

gsap.to(".Project .case", {
  rotate: 90,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".rotatePhone",
    scrub: true,
    start: "top center",
    end: "bottom bottom",
    markers: true,
  },
});
