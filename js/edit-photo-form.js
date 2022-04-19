import {isEscKey} from './util.js';

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const formControlNode = document.querySelector('#upload-file');
const overlayModalNode = document.querySelector('.img-upload__overlay');
const bodyNode = document.querySelector('body');
const userCloseElementNode = document.querySelector('.img-upload__cancel');
const formModalNode = document.querySelector('.img-upload__form');
const imageNode = document.querySelector('.img-upload__preview');
const sliderFieldNode = document.querySelector('.img-upload__effect-level');
const editableImageNode = imageNode.querySelector('img');

function openEditPhotoFormModal () {
  const file = formControlNode.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileName.endsWith(it));
  if (matches) {
    editableImageNode.src = URL.createObjectURL(file);
  }

  overlayModalNode.classList.remove('hidden');
  bodyNode.classList.add('modal-open');
  document.addEventListener('keydown', onFormModalEscKeydown);
}

function closeEditPhotoFormModal () {
  overlayModalNode.classList.add('hidden');
  bodyNode.classList.remove('modal-open');
  formModalNode.reset();
  imageNode.style = 'filter: ``';
  formControlNode.value = '';
  editableImageNode.style = 'transform: scale(1)';
  sliderFieldNode.classList.add('hidden');
  document.removeEventListener('keydown', onFormModalEscKeydown);
}

function onFormModalEscKeydown (evt) {
  if (isEscKey(evt)) {
    evt.preventDefault();
    closeEditPhotoFormModal();
  }
}

formControlNode.addEventListener('change', openEditPhotoFormModal);


userCloseElementNode.addEventListener('click', closeEditPhotoFormModal);

export {onFormModalEscKeydown};
export {closeEditPhotoFormModal};
