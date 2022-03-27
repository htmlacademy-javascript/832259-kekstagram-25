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
const commentsListNode = document.querySelector('.social__comments');

function createCommentsList (photo) {
  commentsListNode.innerHTML= '';

  const comments = photo.comments;
  const commentsFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    const commentNode = document.createElement('li');
    commentNode.classList.add('social__comment');
    commentNode.innerHTML = `
    <img
        class="social__picture"
        src="${comment.avatar}"
        alt="${comment.name}"
        width="35" height="35">
  `;

    const userMessageNode = document.createElement('p');
    userMessageNode.classList.add('social__text');
    userMessageNode.textContent = comment.message;

    commentNode.appendChild(userMessageNode);
    commentsFragment.appendChild(commentNode);
  });

  commentsListNode.appendChild(commentsFragment);

  return commentsFragment;
}

function fillingPhotoModal (photo) {
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

function openPhotoModal () {

  bodyNode.classList.add('modal-open');
  photoModalNode.classList.remove('hidden');

  document.addEventListener('keydown', onPhotoModalEscKeydown);
}

userPhotoModalCloseElement.addEventListener('click', closePhotoModal);


countMoreCommentsNode.classList.add('hidden');
loadMoreCommentsNode.classList.add('hidden');

export {fillingPhotoModal};
export {openPhotoModal};
