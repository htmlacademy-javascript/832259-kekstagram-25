import {renderPhotoPreview} from './render-photo-preview.js';
import {closeEditPhotoFormModal} from './edit-photo-form.js';
import {setUserFormSubmit} from './edit-photo-validate-form.js';
import {getData} from './api.js';
import './edit-photo-form.js';
import './edit-photo-validate-form.js';
import './edit-image-scale.js';
import './edit-image-effect.js';

getData((photos) => {
  renderPhotoPreview(photos);
});

setUserFormSubmit(closeEditPhotoFormModal);
