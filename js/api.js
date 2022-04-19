import {showAlert} from './util.js';
import {userFiltersElement} from './filters.js';

function getData (onSuccess) {
  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
      userFiltersElement.style.opacity = 1;
    })
    .catch(() => showAlert('Данные не загружены, обновите страницу!'));
}

function sendData (onSuccess, onSuccessMessageFunction, onLoadMessageFunction, onFailMessageFunction, body) {
  fetch('https://25.javascript.pages.academy/kekstagram', {
    method: 'POST',
    body
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
        onSuccessMessageFunction();
        onLoadMessageFunction();
      } else {
        onFailMessageFunction();
        onLoadMessageFunction();
      }
    })
    .catch(() => {
      onFailMessageFunction();
      onLoadMessageFunction();
    });
}

export {getData};
export {sendData};
