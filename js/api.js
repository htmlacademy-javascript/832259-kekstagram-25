import {showAlert} from './util.js';

function getData (onSuccess) {
  fetch('https://25.javascript.pages.academy/kekstagram/data')
    .then((response) => response.json())
    .then((photos) => {
      onSuccess(photos);
    }).catch(() => {
      showAlert('Данные не загружены, обновите страницу!');
    });
}

function sendData (onSuccess, onSuccessMessage, onFailMessage, body) {
  fetch(
    'https://25.javascript.pages.academy/kekstagram',
    {
      method: 'POST',
      body
    }
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        onSuccessMessage();
      } else {
        onFailMessage();
      }
    })
    .catch(() => {
      onFailMessage();
    });
}

export {getData};
export {sendData};
