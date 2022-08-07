var currentlyProcessingCall = false;
let isChromium = !!window.chrome;

window.scrollTo(0, 0);

const objparent = document.querySelector('.Skills');
const obj = document.querySelector('.skilllists');
const objtotrans = document.querySelector('.skilllists .flexbox');
const nextsection = document.querySelector('.Contact');
const navtxt = document.querySelector('nav h1');

function delayfunction(ms, callback) {
    if (currentlyProcessingCall) return;
    currentlyProcessingCall = true;
    eval(callback)();
    setTimeout(function(){ currentlyProcessingCall = false; },ms);
  }

function checkheaderchange() {
    if (objparent.getBoundingClientRect().top <= 0) {
        if (navtxt.innerHTML !== "Skills") {
            //navtxt.style.fontSize = 0;
            navtxt.style.opacity = 0.2;
            setTimeout(function () {
                navtxt.style.borderColor = "#4831d4";
                navtxt.innerHTML = "Skills";
                //navtxt.style.fontSize = "1.5rem";
                navtxt.style.opacity = 1;
            }, 350);
        }
    } else {
        if (navtxt.innerHTML !== "Education &amp; Working Exp.") {
            //navtxt.style.fontSize = 0;
            navtxt.style.opacity = 0.2;
            setTimeout(function () {
                navtxt.innerHTML = "Education & Working Exp.";
                navtxt.style.borderColor = "#47bcd4";
                //navtxt.style.fontSize = "1.5rem";
                navtxt.style.opacity = 1;
            }, 350);
        }
    }
}


function scrollbox() {
    /* Trans X when scroll*/

    const objwidth = objtotrans.childElementCount * objtotrans.firstElementChild.offsetWidth;
    const distancecanmove = nextsection.getBoundingClientRect().top - objparent.getBoundingClientRect().top;
    const DistanceMoved = obj.getBoundingClientRect().top - objparent.getBoundingClientRect().top - 70 * window.innerHeight / 100;

    var MoveDist = DistanceMoved / (distancecanmove - 70 / 100 * window.innerHeight) * (objwidth);
    if (MoveDist < 0) MoveDist = 0;
    objtotrans.style.transform = "translateX(-" + MoveDist + "px)";

    if(isChromium)
        delayfunction(750, checkheaderchange);
    else 
        checkheaderchange()
}

window.addEventListener('resize', scrollbox);
window.addEventListener('scroll', scrollbox);

setTimeout(function () {
    document.querySelector('.loader .background').style.transform = "rotate(360deg) scale(0)";
}, 500);

setTimeout(function () {
    document.querySelector('.loader').style.opacity = "0";
}, 1000);

setTimeout(function () {
    document.querySelector('.loader').remove();
}, 1500);


window.addEventListener("mousemove", (e) => {
    document.querySelector("#cursor").style.display = "unset";
    document.querySelector("#cursor").style.setProperty('--cursorpx', e.clientX + 'px, ' + e.clientY + 'px');
});

document.documentElement.addEventListener('mouseleave', () => {
    document.querySelector("#cursor").style.display = "none";
})