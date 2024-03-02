const personalDesc = document.querySelector(".personalDesc");

let typeSettings = {
  waitTime: 1,
  typeSpeed: 50,
  deleteSpeed: 25,
  mode: "write",
  sentence: 0,
  character: 0,
  currentText: "",
  personalDescText: [
    "Year 3 Computer Science student",
    "Web Developer",
    "Study at the Chinese University of Hong Kong",
    "Software Engineer",
  ],
};

(function type() {
  if (typeSettings.mode === "write") {
    if (typeSettings.sentence < typeSettings.personalDescText.length) {
      if (
        typeSettings.character <
        typeSettings.personalDescText[typeSettings.sentence].length
      ) {
        if (typeSettings.character === 0) typeSettings.currentText = "";
        typeSettings.currentText += typeSettings.personalDescText[
          typeSettings.sentence
        ].charAt(typeSettings.character);
        personalDesc.innerHTML = typeSettings.currentText;
        typeSettings.character++;
      } else {
        typeSettings.mode = "wait";
      }
    } else {
      typeSettings.sentence = 0;
    }
    setTimeout(type, typeSettings.typeSpeed);
  } else if (typeSettings.mode === "delete") {
    if (typeSettings.character > 1) {
      typeSettings.currentText = typeSettings.personalDescText[
        typeSettings.sentence
      ].substring(0, typeSettings.character - 1);
      personalDesc.innerHTML = typeSettings.currentText;
      typeSettings.character--;
      setTimeout(type, typeSettings.deleteSpeed);
    } else if (typeSettings.character === 1) {
      typeSettings.currentText = "_";
      personalDesc.innerHTML = typeSettings.currentText;
      typeSettings.character = 0;
      typeSettings.mode = "write";
      typeSettings.sentence++;
      setTimeout(type, 250);
    } else {
      typeSettings.mode = "write";
      typeSettings.sentence++;
      setTimeout(type, typeSettings.deleteSpeed);
    }
  } else if (typeSettings.mode === "wait") {
    setTimeout(() => {
      typeSettings.mode = "delete";
      type();
    }, typeSettings.waitTime * 1000);
  }
})();

gsap.to(".Intro", {
  autoAlpha: 0,
  y: -100,
  ease: "power2.inOut",
  scrollTrigger: {
    trigger: ".Intro",
    scrub: true,
    start: "top top",
    end: "25%",
    pin: true,
  },
});
