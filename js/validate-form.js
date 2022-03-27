import {onFormModalEscKeydown} from './form.js';

const formModalNode = document.querySelector('.img-upload__form');
const textDescriptionNode = document.querySelector('.text__description');
const hashtagsNode = document.querySelector('.text__hashtags');

const pristine = new Pristine(formModalNode, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  erreorTextTag: 'span',
  errorTextClass: 'img-upload__text'
});

function validateComment (value) {
  return value.length <= 140;
}

pristine.addValidator(
  formModalNode.querySelector('.text__description'),
  validateComment,
  'Максимальное количество символов - 140'
);

textDescriptionNode.addEventListener('focus', () => {
  document.removeEventListener('keydown', onFormModalEscKeydown);
});

textDescriptionNode.addEventListener('focusout', () => {
  document.addEventListener('keydown', onFormModalEscKeydown);
});

const regular = /^#[a-zа-яё0-9]{1,19}$/i;

function validateHashtag (value) {
  const hashtags = value.trim().toLowerCase().split(/\s+/);
  const validatedHastags = [];

  if(hashtags.length > 5) {
    return false;
  }

  for (let i = 0; i <= hashtags.length; i++) {
    if (!regular.test(hashtags[i])) {
      return false;
    }

    if (validatedHastags.includes(hashtags[i])) {
      return false;
    }
    validatedHastags.push(hashtags[i]);
  }
  return true;
}

textDescriptionNode.addEventListener('focus', () => {
  document.removeEventListener('keydown', onFormModalEscKeydown);
});
textDescriptionNode.addEventListener('focusout', () => {
  document.addEventListener('keydown', onFormModalEscKeydown);
});

hashtagsNode.addEventListener('focus', () => {
  document.removeEventListener('keydown', onFormModalEscKeydown);
});
hashtagsNode.addEventListener('focusout', () => {
  document.addEventListener('keydown', onFormModalEscKeydown);
});

pristine.addValidator(
  formModalNode.querySelector('.text__hashtags'),
  validateHashtag,
  'adsad'
);

formModalNode.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});


