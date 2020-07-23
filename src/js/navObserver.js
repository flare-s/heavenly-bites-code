import "intersection-observer";
import {bubble} from "./sectionObserver";
const cta = document.querySelector('.cta-box');
const header = document.querySelector('header');

const navOptions = {
    threshold: 0.3
    /*threshold: [...Array(100).keys()].map(x => x / 100)*/
};

const group = [header, cta];


//observing tha call to action area to see when to apply the fixed nav class and when to remove it
const navObserver = new IntersectionObserver((entries,navObserver) => {
    entries.forEach((entry) => {
        if (entry.target === cta) {
            if(entry.intersectionRatio < 0.3) {
                header.classList.add('fixed-nav');
                // so the bubble show when the fixed nav is applied
                bubble.style.display = '';
            } else   {
                // so the bubble dont show when the fixed nav is removed
                 bubble.style.display = 'none';
                 header.classList.remove('fixed-nav');
            }
            
        }
        
        
        
    });
    
    
}, navOptions);

group.forEach(el => {
    navObserver.observe(el);
});