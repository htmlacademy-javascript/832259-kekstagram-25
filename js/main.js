import './util.js';
import './mock/comments.js';
import './mock/photo-description.js';
import './render-photo-preview.js';
import {createPhotoDescription} from './mock/photo-description.js';
import {renderPhotoPreview} from './render-photo-preview.js';

const COUNT_DESCRIPTION = 25;

const arrPhotos = createPhotoDescription(COUNT_DESCRIPTION);

document.addEventListener('DOMContentLoaded', () => {
  renderPhotoPreview(arrPhotos);
});


