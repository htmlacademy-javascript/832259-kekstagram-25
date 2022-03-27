import {isEscKey} from './util.js';
import {isEnterKey} from './util.js';

const formControlNode = document.querySelector('#upload-file');
const overlayModalNode = document.querySelector('.img-upload__overlay');
const bodyNode = document.querySelector('body');
const userCloseElementNode = document.querySelector('.img-upload__cancel');
const formModalNode = document.querySelector('.img-upload__form');

function openedFormModal () {
  overlayModalNode.classList.remove('hidden');
  bodyNode.classList.add('modal-open');

  document.addEventListener('keydown', onFormModalEscKeydown);
}

function closedFormModal () {
  overlayModalNode.classList.add('hidden');
  bodyNode.classList.remove('modal-open');
  formModalNode.reset();

  document.removeEventListener('keydown', onFormModalEscKeydown);
}

function onFormModalEscKeydown (evt) {
  if (isEscKey(evt)) {
    evt.preventDefault();
    closedFormModal();
  }
}

formControlNode.addEventListener('change', openedFormModal);
formControlNode.addEventListener('keydown', (evt) => {
  if (isEnterKey(evt)) {
    openedFormModal();
  }
});

userCloseElementNode.addEventListener('click', closedFormModal);
userCloseElementNode.addEventListener('keydown', closedFormModal);

export {onFormModalEscKeydown};
