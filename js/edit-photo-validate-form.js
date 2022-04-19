import {onFormModalEscKeydown} from './edit-photo-form.js';
import {isEscKey} from './util.js';
import {sendData} from './api.js';

const MAX_COMMENT_SYMBOL_LENGTH = 140;
const MAX_COUNT_HASHTAGS = 5;

const formModalNode = document.querySelector('.img-upload__form');
const textDescriptionNode = document.querySelector('.text__description');
const hashtagsNode = document.querySelector('.text__hashtags');
const successMessageTemplate = document.querySelector('#success')
  .content
  .querySelector('.success');
const errorMessageTemplate = document.querySelector('#error')
  .content
  .querySelector('.error');
const loadingMessageTemplate = document.querySelector('#messages')
  .content
  .querySelector('.img-upload__message');

const successModal = successMessageTemplate.cloneNode(true);
const errorModal = errorMessageTemplate.cloneNode(true);
const loadingMessage = loadingMessageTemplate.cloneNode(true);

successModal.classList.add('hidden');
errorModal.classList.add('hidden');

const submitButton = document.querySelector('.img-upload__submit');

document.body.appendChild(successModal);
document.body.appendChild(errorModal);

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

successModal.addEventListener('click', closeSuccessModal);

function closeSuccessModal (evt) {
  const isClickByButton = evt.target.classList.contains('success__button');
  const isClickByOuter = evt.target.classList.contains('success');

  if (isClickByButton || isClickByOuter || isEscKey(evt)) {
    successModal.classList.add('hidden');
    document.removeEventListener('keydown', isEscKeyPressCloseSuccessModal);
  }
}

function isEscKeyPressCloseSuccessModal (evt) {
  if (isEscKey(evt)) {
    closeSuccessModal(evt);
  }
}

function renderSuccessSendDataMessage () {
  successModal.classList.remove('hidden');

  document.addEventListener('keydown', isEscKeyPressCloseSuccessModal);
}


function blockSubmitButton  () {
  submitButton.disabled = true;
  document.body.appendChild(loadingMessage);
}

function unblockSubmitButton () {
  submitButton.disabled = false;
  const loadMessageNode = document.querySelector('.img-upload__message');
  loadMessageNode.classList.add('hidden');
}

errorModal.addEventListener('click', closeErrorModal);

function closeErrorModal (evt) {
  const isClickByButton = evt.target.classList.contains('error__button');
  const isClickByOuter = evt.target.classList.contains('error');

  if (isClickByButton || isClickByOuter || isEscKey(evt)) {
    errorModal.classList.add('hidden');
    document.removeEventListener('keydown', isEscKeyPressCloseErrorModal);
  }
}

function isEscKeyPressCloseErrorModal (evt) {
  if (isEscKey(evt)) {
    closeSuccessModal(evt);
  }
}

function renderErrorSendDataMessage () {
  errorModal.classList.remove('hidden');

  document.addEventListener('keydown', isEscKeyPressCloseErrorModal);
}

function setUserFormSubmit (onSuccess) {
  formModalNode.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      sendData (
        () => onSuccess(),
        () => unblockSubmitButton(),
        () => renderSuccessSendDataMessage(),
        () => renderErrorSendDataMessage(),
        new FormData(evt.target)
      );
    }
  });
}

export {setUserFormSubmit};
