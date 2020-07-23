import "intersection-observer";
const images = Array.prototype.slice.call(document.querySelectorAll('[data-src]'));

const imagesOptions = {
    //to extend the bottom viewport margin to load the image a liitle bit before the image be in the viewport range
    rootMargin: '0px 0px 100px 0px'
};

//function that will lazy load images with data-src as an attribute
function loadImages(image) {
    image.src = image.dataset.src;
    if(!image.src) {
        return;
    }
    
    if (image.dataset.srcset) {
        image.srcset = image.dataset.srcset;
    }
    
};

//setting an observer on elements with data-src attribute to lazyload it's src
const imagesObserver = new IntersectionObserver((entries, imagesObserver) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            loadImages(entry.target);
            imagesObserver.unobserve(entry.target);
        } else {
            return;
        }
        
    })
}, imagesOptions);

images.forEach(image => {
    imagesObserver.observe(image);
});