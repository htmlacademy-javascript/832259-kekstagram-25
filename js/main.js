import {renderPhotoPreview} from './render-photo-preview.js';
import {closeEditPhotoFormModal} from './edit-photo-form.js';
import {setUserFormSubmit} from './edit-photo-validate-form.js';
import {getData} from './api.js';
import {debounce} from './util.js';
import {setButtonsContainerClick} from './filters.js';
import './edit-photo-form.js';
import './edit-photo-validate-form.js';
import './edit-image-scale.js';
import './edit-image-effect.js';

const RERENDER_DELAY = 500;

getData((photos) => {
  renderPhotoPreview(photos);
  setButtonsContainerClick(debounce(
    (sortedData) => renderPhotoPreview(sortedData),
    RERENDER_DELAY,
  ), photos);
});

setUserFormSubmit(closeEditPhotoFormModal);
