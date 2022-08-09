let isChromium = !!window.chrome;
const ball = document.querySelector('.ball');
const descmelst = document.querySelector('.descme');
const objtotrans = document.querySelector('.skilllists .flexbox');
const navtxt = document.querySelector('nav h1');

function scrollbox() {
    const objwidth = objtotrans.childElementCount * objtotrans.firstElementChild.offsetWidth;
    const distancecanmove = descmelst.lastElementChild.getBoundingClientRect().top - descmelst.firstElementChild.getBoundingClientRect().top;
    let DistanceMoved = -descmelst.getBoundingClientRect().top
    DistanceMoved = DistanceMoved > distancecanmove ? distancecanmove : DistanceMoved < 0 ? 0 : DistanceMoved;
    const MoveDist = DistanceMoved / distancecanmove * (objwidth - window.innerWidth);
    objtotrans.style.transform = "translateX(-" + MoveDist + "px)";
}


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


document.querySelector('.self-intro').appendChild(document.querySelector(".Contact .container div").cloneNode(true));

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
            if (!isChromium) navtxt.style.fontSize = 0;
            navtxt.style.opacity = 0.2;
            setTimeout(function () {
                navtxt.innerHTML = "Education & Working Exp.";
                navtxt.style.borderColor = "#47bcd4";
                navtxt.style.opacity = 1;
                if (!isChromium) navtxt.style.fontSize = "1.5rem";
            }, 350);
        } else {
            window.addEventListener('resize', scrollbox);
            window.addEventListener('scroll', scrollbox);
            if (!isChromium) navtxt.style.fontSize = 0;
            navtxt.style.opacity = 0.2;
            setTimeout(function () {
                navtxt.style.borderColor = "#4831d4";
                navtxt.innerHTML = "Skills";
                navtxt.style.opacity = 1;
                if (!isChromium) navtxt.style.fontSize = "1.5rem";
            }, 350);
        }
    }
}).observe(document.querySelector('.Education'));




