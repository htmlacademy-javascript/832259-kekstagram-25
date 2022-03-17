import {isEscKey} from './util.js';

const fullSizePhotoNode = document.querySelector('.big-picture');
const userFullSizePhotoCloseElement = document.querySelector('.big-picture__cancel');
const bodyNode = document.querySelector('body');

const closeFullSizePhoto = () => {
  fullSizePhotoNode.classList.add('hidden');
  bodyNode.classList.remove('modal-open');

  document.removeEventListener('keydown', (evt) => {
    if(isEscKey(evt)) {
      evt.preventDefault();
      closeFullSizePhoto();
    }
  });
};


const onFullSizePhotoEscKeydown = (evt) => {
  if(isEscKey(evt)) {
    evt.preventDefault();
    closeFullSizePhoto();
  }
};

const openFullSizePhoto = (evt) => {
  evt.preventDefault();
  const countCommentsNode = document.querySelector('.social__comment-count');
  const loadCommentsNode = document.querySelector('.comments-loader');

  countCommentsNode.classList.add('hidden');
  loadCommentsNode.classList.add('hidden');
  bodyNode.classList.add('modal-open');
  fullSizePhotoNode.classList.remove('hidden');

  document.addEventListener('keydown', onFullSizePhotoEscKeydown);
};

userFullSizePhotoCloseElement.addEventListener('click', closeFullSizePhoto);
userFullSizePhotoCloseElement.addEventListener('keydown', (evt) => {
  if(isEscKey(evt)) {
    closeFullSizePhoto();
  }
});

export {openFullSizePhoto};
