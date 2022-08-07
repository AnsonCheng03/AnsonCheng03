var currentlyProcessingCall = false;
let isChromium = !!window.chrome;
const objparent = document.querySelector('.Skills');
const obj = document.querySelector('.skilllists');
const objtotrans = document.querySelector('.skilllists .flexbox');
const nextsection = document.querySelector('.Contact');
const navtxt = document.querySelector('nav h1');

function scrollbox() {
    console.log("a")
    /* Trans X when scroll*/
    const objwidth = objtotrans.childElementCount * objtotrans.firstElementChild.offsetWidth;
    const distancecanmove = nextsection.getBoundingClientRect().top - objparent.getBoundingClientRect().top;
    const DistanceMoved = obj.getBoundingClientRect().top - objparent.getBoundingClientRect().top - 70 * window.innerHeight / 100;

    var MoveDist = DistanceMoved / (distancecanmove - 70 / 100 * window.innerHeight) * (objwidth);
    if (MoveDist < 0) MoveDist = 0;
    objtotrans.style.transform = "translateX(-" + MoveDist + "px)";
}

window.addEventListener("mousemove", (e) => {
    document.querySelector("#cursor").style.display = "unset";
    document.querySelector("#cursor").style.setProperty('--cursorpx', e.clientX + 'px, ' + e.clientY + 'px');
});
document.documentElement.addEventListener('mouseleave', () => {
    document.querySelector("#cursor").style.display = "none";
})


window.scrollTo(0, 0);
setTimeout(function () {
    document.querySelector('.loader .background').style.transform = "rotate(360deg) scale(0)";
}, 500);

setTimeout(function () {
    document.querySelector('.loader').style.opacity = "0";
}, 1000);

setTimeout(function () {
    document.querySelector('.loader').remove();
}, 1500);
if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.querySelector('.warning .PCV').style.display = "none";
}

const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.setAttribute('enterscreen', '');
        } else {
            entry.target.removeAttribute('enterscreen');
        }
    }
});
for (const item of document.querySelectorAll('.card-content')) {
    observer.observe(item);
}

new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            window.removeEventListener('resize', scrollbox);
            window.removeEventListener('scroll', scrollbox);
            navtxt.style.opacity = 0.2;
            setTimeout(function () {
                navtxt.innerHTML = "Education & Working Exp.";
                navtxt.style.borderColor = "#47bcd4";
                navtxt.style.opacity = 1;
            }, 350);
        } else {

            window.addEventListener('resize', scrollbox);
            window.addEventListener('scroll', scrollbox);
            navtxt.style.opacity = 0.2;
            setTimeout(function () {
                navtxt.style.borderColor = "#4831d4";
                navtxt.innerHTML = "Skills";
                navtxt.style.opacity = 1;
            }, 350);
        }
    }
}).observe(document.querySelector('.Education'));