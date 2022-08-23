/* Declare Variables */
const ball = document.querySelector('.ball');
const descmelst = document.querySelector('.descme');
const objtotrans = document.querySelector('.skilllists .flexbox');
const navtxt = document.querySelector('nav h1');

/* Make Contacts on Main Page */
document.querySelector('.self-intro').appendChild(document.querySelector(".Contact .container div").cloneNode(true));


/* Animations of Cards */

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

/* Change nav bar */

function scrollbox() {
    const objwidth = objtotrans.childElementCount * objtotrans.firstElementChild.offsetWidth;
    const distancecanmove = descmelst.lastElementChild.getBoundingClientRect().top - descmelst.firstElementChild.getBoundingClientRect().top;
    let DistanceMoved = -descmelst.getBoundingClientRect().top
    DistanceMoved = DistanceMoved > distancecanmove ? distancecanmove : DistanceMoved < 0 ? 0 : DistanceMoved;
    const MoveDist = DistanceMoved / distancecanmove * (objwidth - window.innerWidth);
    objtotrans.style.transform = "translateX(-" + MoveDist + "px)";
}

new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            window.removeEventListener('resize', scrollbox);
            window.removeEventListener('scroll', scrollbox);
            navtxt.style.fontSize = 0;
            navtxt.style.opacity = 0.2;
            setTimeout(function () {
                navtxt.innerHTML = "Education & Experiences";
                navtxt.style.borderColor = "#47bcd4";
                navtxt.style.opacity = 1;
                navtxt.style.fontSize = "1.5rem";
            }, 350);
        } else {
            window.addEventListener('resize', scrollbox);
            window.addEventListener('scroll', scrollbox);
            navtxt.style.fontSize = 0;
            navtxt.style.opacity = 0.2;
            setTimeout(function () {
                navtxt.style.borderColor = "#4831d4";
                navtxt.innerHTML = "Skills";
                navtxt.style.opacity = 1;
                navtxt.style.fontSize = "1.5rem";
            }, 350);
        }
    }
}).observe(document.querySelector('.Education'));


/* Hide viewport button on desktop */
if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.querySelector('.warning .PCV').style.display = "none";
    window.addEventListener("mousemove", (e) => {
        document.querySelector("#cursor").style.display = "unset";
        document.querySelector("#cursor").style.setProperty('--cursorpx', e.clientX + 'px, ' + e.clientY + 'px');
    });
    document.documentElement.addEventListener('mouseleave', () => {
        document.querySelector("#cursor").style.display = "none";
    })
}




/*snap stop css fix*/
const fixedElements = [...document.body.getElementsByTagName("*")].filter(x => getComputedStyle(x, null).getPropertyValue("scroll-snap-align") !== "none")
var scrolldone = 0;
var currentscroll = 0;

function scrolltoobj() {
    const obj = fixedElements[currentscroll];
    window.scroll({
        top: (getComputedStyle(obj, null).getPropertyValue("scroll-snap-align") == 'start') ?
            obj.getBoundingClientRect().top + window.scrollY :
            obj.getBoundingClientRect().top + window.scrollY - (window.innerHeight - obj.clientHeight) / 2,
        behavior: 'smooth'
    });
}

function scrolldownsimu(e, action) {
    /* Prevent Chrome jumpy behaviour on scroll snap stop */
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
        if (!!window.chrome) {
            e.preventDefault();
            if (action == "keyboard") {
                currentscroll += (e.code == "ArrowDown") ?
                    (currentscroll < fixedElements.length - 1 ? 1 : 0) :
                    (currentscroll > 0 ? -1 : 0);
                scrolltoobj()
            } else {
                if (scrolldone == 0) {
                    currentscroll += (e.deltaY > 0) ?
                        (currentscroll < fixedElements.length - 1 ? 1 : 0) :
                        (currentscroll > 0 ? -1 : 0);
                    scrolltoobj()
                    scrolldone = false;
                }
                scrolldone += 1;
                setTimeout(() => { scrolldone -= 1; }, 75);
            }
        }

    /* Fix Desktop Safari scroll snap stop not working on mouse*/
    if (!/iPhone|iPad|iPod/i.test(navigator.userAgent))
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            const isTouchPad = e.wheelDeltaY ? e.wheelDeltaY === -3 * e.deltaY : e.deltaMode === 0
            if (!isTouchPad) {
                e.preventDefault();
                if (scrolldone == 0) {
                    currentscroll += (e.deltaY > 0) ?
                        (currentscroll < fixedElements.length - 1 ? 1 : 0) :
                        (currentscroll > 0 ? -1 : 0);
                    scrolltoobj()
                    scrolldone = false;
                }
                scrolldone += 1;
                setTimeout(() => { scrolldone -= 1; }, 75);
            }
        }

}

/*Disable Scrolling*/
let supportsPassive = false;
try { window.addEventListener("test", null, Object.defineProperty({}, 'passive', { get: function () { supportsPassive = true; } })); } catch (e) { }
const wheelOpt = supportsPassive ? { passive: false } : false;
window.addEventListener('DOMMouseScroll', (e) => scrolldownsimu(e, 'scroll'), false);
window.addEventListener('onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel', (e) => scrolldownsimu(e, 'scroll'), wheelOpt);
window.addEventListener('touchmove', (e) => scrolldownsimu(e, 'scroll'), wheelOpt);

if (!!window.chrome)
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.documentElement.style.scrollSnapType = "none";
        window.addEventListener('load', scrolltoobj);
        window.addEventListener('resize', scrolltoobj);
        window.addEventListener('keydown', (e) => { if ({ 'ArrowDown': 1, 'ArrowUp': 1 }[e.code]) { scrolldownsimu(e, 'keyboard'); } }, false);
    } else {
        document.documentElement.style.scrollSnapType = "none";
    }



window.addEventListener('load', () => {
    /*scroll to top on load*/
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    } else {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }

    /* ig linktree */
    if (navigator.userAgent.indexOf("Instagram") != -1)
        document.querySelector('.linktree').style.display = unset;

})



