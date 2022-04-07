import {isEnterKey} from './util.js';
import {isEscKey} from './util.js';

const photoModalNode = document.querySelector('.big-picture');
const userPhotoModalCloseElement = document.querySelector('.big-picture__cancel');
const bodyNode = document.querySelector('body');
const loadMoreCommentsNode = document.querySelector('.comments-loader');
const imgElementNode = document.querySelector('.big-picture__img img');
const countCommentsPerPageNode = document.querySelector('.comments-count-per-page');
const countLikesNode = document.querySelector('.likes-count');
const countCommentsNode = document.querySelector('.comments-count');
const descriptionPhotoNode = document.querySelector('.social__caption');
const commentsListNode = document.querySelector('.social__comments');

let currentPhoto;
let commentsCurrentPage = 0;
const commentsCountPerPage = 5;

function renderMoreComments () {
  commentsCurrentPage++;

  const shift = commentsCurrentPage * commentsCountPerPage;
  const comments = currentPhoto.comments.slice(shift, shift + commentsCountPerPage);
  countCommentsPerPageNode.textContent = comments.length+=shift;
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

  hideLoadMoreComments();
}

function hideLoadMoreComments () {
  const maxPages = Math.ceil(currentPhoto.comments.length / commentsCountPerPage);

  if (commentsCurrentPage >= maxPages) {
    loadMoreCommentsNode.classList.add('hidden');
  } else {
    loadMoreCommentsNode.classList.remove('hidden');
  }
}


loadMoreCommentsNode.addEventListener('click', () => {
  renderMoreComments();
});


loadMoreCommentsNode.addEventListener('keydown', (evt) => {
  if (!isEnterKey(evt)) {
    renderMoreComments();
  }
});

function fillingPhotoModal (photo) {
  imgElementNode.src = photo.url;
  countLikesNode.textContent = photo.likes;
  commentsListNode.innerHTML= '';
  countCommentsNode.textContent = photo.comments.length;
  descriptionPhotoNode.textContent = photo.description;
  commentsCurrentPage = -1;

  currentPhoto = photo;

  renderMoreComments();
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

export {fillingPhotoModal};
export {openPhotoModal};
