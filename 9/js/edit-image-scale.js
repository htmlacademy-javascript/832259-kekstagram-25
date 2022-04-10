import {isEnterKey} from './util.js';

const SHIFT = 25;
const MIN_IMAGE_SCALE_VALUE = 25;
const MAX_IMAGE_SCALE_VALUE = 100;

const decreaseScaleValueButton = document.querySelector('.scale__control--smaller');
const increaseScaleValueButton = document.querySelector('.scale__control--bigger');
const imageScaleValueNode = document.querySelector('.scale__control--value');
const editableImageNode = document.querySelector('.img-upload__preview');

function zoomOutImage () {
  imageScaleValueNode.value = `${parseInt(imageScaleValueNode.value, 10) - SHIFT}%`;

  if (parseInt(imageScaleValueNode.value, 10) < MIN_IMAGE_SCALE_VALUE) {
    imageScaleValueNode.value = `${MIN_IMAGE_SCALE_VALUE}%`;
  }

  editableImageNode.style = `transform: scale(${parseInt(imageScaleValueNode.value, 10) / 100})`;
}

function zoomInImage () {
  imageScaleValueNode.value = `${parseInt(imageScaleValueNode.value, 10) + SHIFT}%`;

  if (parseInt(imageScaleValueNode.value, 10) > MAX_IMAGE_SCALE_VALUE) {
    imageScaleValueNode.value = `${MAX_IMAGE_SCALE_VALUE}%`;
  }

  editableImageNode.style = `transform: scale(${parseInt(imageScaleValueNode.value, 10) / 100})`;
}

decreaseScaleValueButton.addEventListener('click', () => {
  zoomOutImage();
});

decreaseScaleValueButton.addEventListener('keydown', (evt) => {
  if(!isEnterKey(evt)) {
    zoomOutImage();
  }
});

increaseScaleValueButton.addEventListener('click', () => {
  zoomInImage();
});

increaseScaleValueButton.addEventListener('keydown', (evt) => {
  if(!isEnterKey(evt)) {
    zoomInImage();
  }
});

