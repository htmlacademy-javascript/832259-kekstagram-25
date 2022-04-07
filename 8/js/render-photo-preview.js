import {openPhotoModal} from './view-photo-modal.js';
import {fillingPhotoModal} from './view-photo-modal.js';
import {isEnterKey} from './util.js';

const pictureNode = document.querySelector('.pictures');
const pictureTemplateNode = document.querySelector('#picture')
  .content
  .querySelector('.picture');

function addClickHandler (previewTemplate, photo) {
  previewTemplate.addEventListener('click', (evt) => {
    evt.preventDefault();
    openPhotoModal();
    fillingPhotoModal(photo);

  });
}

function addPressEnterHandler (previewTemplate, photo) {
  previewTemplate.addEventListener('keydown', (evt) => {
    if(!isEnterKey(evt)) {
      return;
    }

    openPhotoModal();
    fillingPhotoModal(photo);
  });
}

function createPhotoPreview (photo) {
  const photoPreviewTemplate = pictureTemplateNode.cloneNode(true);
  const imgNode = photoPreviewTemplate.querySelector('.picture__img');
  const likesNode = photoPreviewTemplate.querySelector('.picture__likes');
  const commentsNode = photoPreviewTemplate.querySelector('.picture__comments');

  imgNode.src = photo.url;
  likesNode.textContent = photo.likes;
  commentsNode.textContent = photo.comments.length;

  addClickHandler(photoPreviewTemplate, photo);
  addPressEnterHandler(photoPreviewTemplate, photo);

  return photoPreviewTemplate;
}

function renderPhotoPreview (photos) {
  const photosFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const photoNode = createPhotoPreview(photo);
    photosFragment.appendChild(photoNode);
  });

  pictureNode.appendChild(photosFragment);
}

export {renderPhotoPreview};
