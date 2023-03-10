import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

const galleryMarkup = galleryItems
    .map((item) =>
        `<div class="gallery__item">
    <a class="gallery__link" href="${item.original}">
    <img
    class="gallery__image"
    src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
   />
   </a>
   </div>`)
    .join("");

gallery.innerHTML = galleryMarkup;
gallery.addEventListener('click', openModalImage)

let chosenImage;
let modalImage;

function openModalImage(event) {
    event.preventDefault();

    if (event.target.nodeName !== "IMG") {
        return;
    }

     chosenImage = event.target.getAttribute('data-source');
     modalImage = basicLightbox.create(`<img src="${chosenImage}" width="800" height="600">`, {
	onShow: (instance) => {document.addEventListener('keydown', onEscapeButtonPress)},
	onClose: (instance) => {document.removeEventListener('keydown', onEscapeButtonPress)}
});

    modalImage.show()
}

function onEscapeButtonPress(event) {
    if (event.key === 'Escape') {
        modalImage.close()
    }
}
