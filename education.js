const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.setAttribute("enterscreen", "");
    } else {
      entry.target.removeAttribute("enterscreen");
    }
  }
});
for (const item of document.querySelectorAll(".card-content")) {
  observer.observe(item);
}
