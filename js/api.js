import {showAlert} from './util.js';
import {userFiltersElement} from './filters.js';
import {closeEditPhotoFormModal} from './edit-photo-form.js';

function getData (onSuccess) {
  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
      userFiltersElement.style.opacity = 1;
    })
    .catch(() => showAlert('Данные не загружены, обновите страницу!'));
}

function sendData (onSuccess, onSuccessMessageFunction, onFailMessageFunction, onLoadMessageFunction, body) {
  fetch('https://25.javascript.pages.academy/kekstagram', {
    method: 'POST',
    body
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
        onSuccessMessageFunction();
      } else {
        onFailMessageFunction();
        closeEditPhotoFormModal();
      }
    })
    .catch(() => {
      onFailMessageFunction();
      closeEditPhotoFormModal();
    })
    .finally(() => {
      onLoadMessageFunction();
    });
}

export {getData};
export {sendData};
