// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

const galleryList = document.querySelector(`.gallery`);

const markup = galleryItems.map(({ preview, original, description }) => `
   <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`).join('');


galleryList.insertAdjacentHTML('afterbegin', markup);
//galleryList.addEventListener(`click`, handlerClick);

new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
  close: false,
  enableKeyboard: true,
});

console.log(galleryItems);
