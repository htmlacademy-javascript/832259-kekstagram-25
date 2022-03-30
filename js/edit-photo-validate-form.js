import {onFormModalEscKeydown} from './edit-photo-form.js';

const MAX_COMMENT_SYMBOL_LENGTH = 140;
const MAX_COUNT_HASHTAGS = 5;

const formModalNode = document.querySelector('.img-upload__form');
const textDescriptionNode = document.querySelector('.text__description');
const hashtagsNode = document.querySelector('.text__hashtags');

const regular = /^#[a-zа-яё0-9]+$/i;

const pristine = new Pristine(formModalNode, {
  classTo: 'img-upload__text',
  errorClass: 'img-upload__text--invalid',
  successClass: 'img-upload__text--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'p',
  errorTextClass: 'img-upload__text'
});

function validateMaxSymbolComment (value) {
  return value.length <= MAX_COMMENT_SYMBOL_LENGTH;
}

pristine.addValidator(
  formModalNode.querySelector('.text__description'),
  validateMaxSymbolComment,
  'Максимальное количество символов - 140'
);

function validateHashtagFormat (value) {
  if (value.trim().length === 0) {
    return true;
  }

  const hashtags = value.trim().toLowerCase().split(/\s+/);

  for (let i = 0; i < hashtags.length; i++) {
    if (!regular.test(hashtags[i])) {
      return false;
    }
  }

  return true;
}

function validateNonRepeatingHashtags (value) {
  const hashtags = value.trim().toLowerCase().split(/\s+/);
  const validatedHastags = [];

  for (let i = 0; i < hashtags.length; i++) {
    if (validatedHastags.includes(hashtags[i])) {
      return false;
    }

    validatedHastags.push(hashtags[i]);
  }

  return true;
}

function validateMaxHashtags (value) {
  const hashtags = value.trim().toLowerCase().split(/\s+/);

  if(hashtags.length > MAX_COUNT_HASHTAGS) {
    return false;
  }

  return true;
}

function validateMaxSymbolHashtags (value) {
  return value.length <= 20;
}

pristine.addValidator(
  formModalNode.querySelector('.text__hashtags'),
  validateHashtagFormat,
  'Не правильный формат хэштега. Пример: "#хэштэг", а также цифры "0-9"',
  1
);

pristine.addValidator(
  formModalNode.querySelector('.text__hashtags'),
  validateNonRepeatingHashtags,
  'Хэштеги не должны повторяться',
  3
);

pristine.addValidator(
  formModalNode.querySelector('.text__hashtags'),
  validateMaxHashtags,
  'Максимальное количество хэштегов - 5',
  2
);

pristine.addValidator(
  formModalNode.querySelector('.text__hashtags'),
  validateMaxSymbolHashtags,
  'Максимальное количество символов - 20',
  4
);

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

formModalNode.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
});


