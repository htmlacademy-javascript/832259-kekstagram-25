import {createPhotoDescription} from './mock/photo-description.js';
import {renderPhotoPreview} from './render-photo-preview.js';
import './form.js';
import './validate-form.js';

const COUNT_DESCRIPTION = 25;

const arrPhotos = createPhotoDescription(COUNT_DESCRIPTION);

document.addEventListener('DOMContentLoaded', () => {
  renderPhotoPreview(arrPhotos);
});
