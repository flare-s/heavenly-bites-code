"use strict";
import "intersection-observer";

// const sections = Array.prototype.slice.call(document.querySelectorAll('[data-name]'));
export const bubble = document.querySelector('.bubble');
let sectionName, activeAnchor, shape, shapeSpecs;

//options for the sections observer
const SectionOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
}

//function that get the bubble element to move to the targeted link in the nav
export function setBubble() {

    shape = activeAnchor.getBoundingClientRect();
    shapeSpecs = {
        top: shape.top,
        left: shape.left,
        width: shape.width,
        height: shape.height
    }
    bubble.style.setProperty('left', `${shapeSpecs.left}px`);
    bubble.style.setProperty('top', `${shapeSpecs.top}px`);
    bubble.style.setProperty('width', `${shapeSpecs.width}px`);
    bubble.style.setProperty('height', `${shapeSpecs.height}px`);

}
// tab-port media query
export const mq = window.matchMedia( "(min-width: 62em)" );


// setting an observer on sections to detect which nav link the bubble element will go to
export const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // the bubble wont show unless the media query condition is true
        if (mq.matches) {
            if (entry.intersectionRatio > 0.3) {
                sectionName = entry.target.dataset.name;
                activeAnchor = document.querySelector(`[data-section=${sectionName}]`);
                setBubble();
            } 
        }
        
    });
}, SectionOptions);


// sections.forEach(section => sectionObserver.observe(section));
// //an event on resizing to check the media query if its true the bubble will show and also adjusting it position on resizing
// window.addEventListener("resize", (e) => {
//     if (mq.matches) {
//         setBubble();
//     }
// });




