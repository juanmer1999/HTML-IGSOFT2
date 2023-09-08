const gallery = document.querySelector('.gallery');
const galleryContainer = document.querySelector('.gallery-container');

let scrollPosition = 0;

galleryContainer.addEventListener('click', () => {
    const imageWidth = gallery.querySelector('img').clientWidth + 10; 
    const galleryWidth = gallery.clientWidth;

    if (scrollPosition <= galleryWidth - imageWidth * gallery.children.length) {
        scrollPosition += imageWidth;
    } else {
        scrollPosition = 0;
    }

    gallery.style.transform = `translateX(-${scrollPosition}px)`;
});
