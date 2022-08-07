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
    if(MoveDist < 0) MoveDist = 0;
    objtotrans.style.transform = "translateX(-" + MoveDist + "px)";

    const navtxt = document.querySelector('nav h1');
    if(objparent.getBoundingClientRect().top <= 0) {
        navtxt.innerHTML = "Skills";
    } else {
        navtxt.innerHTML = "Education & Working Exp.";
    }
}

document.addEventListener('resize', scrollbox);
document.addEventListener('scroll', scrollbox);

setTimeout(function() {
    const obj = document.querySelector('.loader .background').style.transform = "rotate(3600deg) scale(0)";
}, 500);

setTimeout(function() {
    const obj = document.querySelector('.loader').style.opacity = 0;
}, 1000);

setTimeout(function() {
    const obj = document.querySelector('.loader').remove();
}, 1500);
