import {createPhotoDescription} from './photo-description.js';

const COUNT_DESCRIPTION = 25;

const pictureNode = document.querySelector('.pictures');
const pictureTemplateNode = document.querySelector('#picture')
  .content
  .querySelector('.picture');

const renderPhotoDescription = () => {
  const arrPhotoDescriptionElements = createPhotoDescription(COUNT_DESCRIPTION);

  const photoDescriptionFragment = document.createDocumentFragment();

  arrPhotoDescriptionElements.forEach(({url, likes, comments}) => {
    const photoDescriptionTemplate = pictureTemplateNode.cloneNode(true);
    const imgNode = photoDescriptionTemplate.querySelector('.picture__img');
    const likesNode = photoDescriptionTemplate.querySelector('.picture__likes');
    const commentsNode = photoDescriptionTemplate.querySelector('.picture__comments');

    imgNode.src = url;
    likesNode.textContent = likes;
    commentsNode.textContent = comments.length;

    photoDescriptionFragment.appendChild(photoDescriptionTemplate);
  });

  pictureNode.appendChild(photoDescriptionFragment);
};

renderPhotoDescription();
