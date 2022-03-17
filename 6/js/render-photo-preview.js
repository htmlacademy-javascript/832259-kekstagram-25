import {openFullSizePhoto} from './full-size-photo-status.js';
import {isEnterKey} from './util.js';
import {createFullSizePhoto} from './full-size-photo.js';
const pictureNode = document.querySelector('.pictures');
const pictureTemplateNode = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const createPhotoPreview = ({url, description, likes, comments}) => {
  const photoPreviewTemplate = pictureTemplateNode.cloneNode(true);
  const imgNode = photoPreviewTemplate.querySelector('.picture__img');
  const likesNode = photoPreviewTemplate.querySelector('.picture__likes');
  const commentsNode = photoPreviewTemplate.querySelector('.picture__comments');

  imgNode.src = url;
  likesNode.textContent = likes;
  commentsNode.textContent = comments.length;

  photoPreviewTemplate.addEventListener('click', (evt) => {
    openFullSizePhoto(evt);
    createFullSizePhoto({url, description, likes, comments});
  });

  photoPreviewTemplate.addEventListener('keydown', (evt) => {
    if(isEnterKey(evt)) {
      openFullSizePhoto(evt);
      createFullSizePhoto({url, description, likes, comments});
    }
  });

  return photoPreviewTemplate;
};

const renderPhotoPreview = (photos) => {
  const photosFragment = document.createDocumentFragment();

  photos.forEach((photo) => {
    const photoNode = createPhotoPreview(photo);
    photosFragment.appendChild(photoNode);
  });

  pictureNode.appendChild(photosFragment);
};

export {renderPhotoPreview};
