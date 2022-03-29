import {isEscKey} from './util.js';
import {isEnterKey} from './util.js';

const formControlNode = document.querySelector('#upload-file');
const overlayModalNode = document.querySelector('.img-upload__overlay');
const bodyNode = document.querySelector('body');
const userCloseElementNode = document.querySelector('.img-upload__cancel');
const formModalNode = document.querySelector('.img-upload__form');

function openEditPhotoFormModal () {
  overlayModalNode.classList.remove('hidden');
  bodyNode.classList.add('modal-open');

  document.addEventListener('keydown', onFormModalEscKeydown);
}

function closeEditPhotoFormModal () {
  overlayModalNode.classList.add('hidden');
  bodyNode.classList.remove('modal-open');
  formModalNode.reset();

  document.removeEventListener('keydown', onFormModalEscKeydown);
}

function onFormModalEscKeydown (evt) {
  if (isEscKey(evt)) {
    evt.preventDefault();
    closeEditPhotoFormModal();
  }
}

formControlNode.addEventListener('change', openEditPhotoFormModal);
formControlNode.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openEditPhotoFormModal();
  }
});

userCloseElementNode.addEventListener('click', closeEditPhotoFormModal);
userCloseElementNode.addEventListener('keydown', closeEditPhotoFormModal);

export {onFormModalEscKeydown};
