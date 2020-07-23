import "intersection-observer";
const elements = Array.prototype.slice.call(document.querySelectorAll('.js-anim'));
const options = {
    threshold: 0.15
};






//observing every element with the class of js-anim, to change the opacity of the element depending if it in the viewport or not
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
            if (entry.intersectionRatio > 0.15) {
                entry.target.classList.remove('un-anim');
                entry.target.classList.add('anim');
            } else if(entry.intersectionRatio < 0.15) {
                entry.target.classList.remove('anim');
                entry.target.classList.add('un-anim');
            }
    })
}, options);
elements.forEach(element => observer.observe(element));






