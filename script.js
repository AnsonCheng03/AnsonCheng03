function scrollbox() {
    /* Trans X when scroll*/
    const objparent = document.querySelector('.Skills');
    const obj = document.querySelector('.skilllists');
    const objtotrans = document.querySelector('.skilllists .flexbox');
    const nextsection = document.querySelector('.Contact');

    const objwidth = objtotrans.childElementCount * objtotrans.firstElementChild.offsetWidth;
    const distancecanmove = nextsection.getBoundingClientRect().top - objparent.getBoundingClientRect().top;
    const DistanceMoved = obj.getBoundingClientRect().top - objparent.getBoundingClientRect().top - 70 * window.innerHeight / 100;

    var MoveDist = DistanceMoved / (distancecanmove - 70 / 100 * window.innerHeight) * (objwidth);
    if (MoveDist < 0) MoveDist = 0;
    objtotrans.style.transform = "translateX(-" + MoveDist + "px)";

    const navtxt = document.querySelector('nav h1');
    if (objparent.getBoundingClientRect().top <= 0) {
        if (navtxt.innerHTML !== "Skills") {
            navtxt.style.fontSize = 0;
            navtxt.style.opacity = 0.2;
            setTimeout(function () {
                navtxt.style.borderColor= "#4831d4";
                navtxt.innerHTML = "Skills";
                navtxt.style.fontSize = "1.5rem";
                navtxt.style.opacity = 1;
            }, 350);
        }
    } else {
        if (navtxt.innerHTML !== "Education &amp; Working Exp.") {
            navtxt.style.fontSize = 0;
            navtxt.style.opacity = 0.2;
            setTimeout(function () {
                navtxt.style.borderColor= "#47bcd4";
                navtxt.innerHTML = "Education & Working Exp.";
                navtxt.style.fontSize = "1.5rem";
                navtxt.style.opacity = 1;
            }, 350);
        }
    }
}

document.addEventListener('resize', scrollbox);
document.addEventListener('scroll', scrollbox);

setTimeout(function () {
    document.querySelector('.loader .background').style.transform = "rotate(360deg) scale(0)";
}, 500);

setTimeout(function () {
    document.querySelector('.loader').style.opacity = "0";
}, 1000);

setTimeout(function () {
    document.querySelector('.loader').remove();
}, 1500);


document.addEventListener("mousemove", (e) => {
    document.querySelector("#cursor").style.setProperty('--cursorpx', e.clientX + 'px, ' + e.clientY + 'px');
    document.querySelector("#cursor").style.setProperty('--cursorborderpx', e.clientX + 'px, ' + e.clientY + 'px');
});
