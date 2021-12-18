import "./sass/main.scss";
import  {animationObserver} from "./js/loadElements";
import {navObserver, cta, header} from "./js/navObserver";
import {assetsObserver} from "./js/imagesObserver";
import {setBubble, sectionObserver, mq} from"./js/sectionObserver";



const assets = Array.prototype.slice.call(document.querySelectorAll('[data-src]'));
const animationElements = Array.prototype.slice.call(document.querySelectorAll('.js-anim'));
const group = [header, cta];
const sections = Array.prototype.slice.call(document.querySelectorAll('[data-name]'));

// aplying the animationObserver on the elements in the variable animationElements
assets.forEach(asset => {
    assetsObserver.observe(asset);
});

// aplying the animationObserver on the elements in the variable animationElements
animationElements.forEach(element => animationObserver.observe(element));

// aplying the navObserver on the elements in the group array
group.forEach(el => {
    navObserver.observe(el);
});

//aplying the sectionObserver on the sections selected
sections.forEach(section => sectionObserver.observe(section));

//an event on resizing to check the media query if its true the bubble will show and also adjusting it position on resizing
window.addEventListener("resize", () => {
    if (mq.matches) {
        setBubble();
    }
});





