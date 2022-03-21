import {isEscKey} from './util.js';

const photoModalNode = document.querySelector('.big-picture');
const userPhotoModalCloseElement = document.querySelector('.big-picture__cancel');
const bodyNode = document.querySelector('body');
const countMoreCommentsNode = document.querySelector('.social__comment-count');
const loadMoreCommentsNode = document.querySelector('.comments-loader');
const imgElementNode = document.querySelector('.big-picture__img img');
const countLikesNode = document.querySelector('.likes-count');
const countCommentsNode = document.querySelector('.comments-count');
const descriptionPhotoNode = document.querySelector('.social__caption');
const commentsList = document.querySelector('.social__comments');

function createCommentsList (comment) {
  commentsList.innerHTML= '';
  const arrComments = comment.comments;
  const commentsFragment = document.createDocumentFragment();

  arrComments.forEach((comments) => {
    const commentNode = document.createElement('li');
    commentNode.classList.add('social__comment');
    commentNode.innerHTML = `
    <img
        class="social__picture"
        src="${comments.avatar}"
        alt="${comments.name}"
        width="35" height="35">
    <p class="social__text">${comments.message}</p>
  `;

    commentsFragment.appendChild(commentNode);
  });

  commentsList.appendChild(commentsFragment);

  return commentsFragment;
}

function createPhotoModal (photo) {
  imgElementNode.src = photo.url;
  countLikesNode.textContent = photo.likes;
  countCommentsNode.textContent = photo.comments.length;
  descriptionPhotoNode.textContent = photo.description;

  createCommentsList(photo);
}

function onPhotoModalEscKeydown (evt) {
  if(isEscKey(evt)) {
    evt.preventDefault();
    closePhotoModal();
  }
}

function closePhotoModal () {
  photoModalNode.classList.add('hidden');
  bodyNode.classList.remove('modal-open');

  document.removeEventListener('keydown', onPhotoModalEscKeydown);
}

function openPhotoModal (evt) {
  evt.preventDefault();

  bodyNode.classList.add('modal-open');
  photoModalNode.classList.remove('hidden');

  document.addEventListener('keydown', onPhotoModalEscKeydown);
}

userPhotoModalCloseElement.addEventListener('click', closePhotoModal);
userPhotoModalCloseElement.addEventListener('keydown', (evt) => {
  if(isEscKey(evt)) {
    closePhotoModal();
  }
});

countMoreCommentsNode.classList.add('hidden');
loadMoreCommentsNode.classList.add('hidden');

export {createPhotoModal};
export {openPhotoModal};
