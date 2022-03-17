const USER_AVATAR_WIDTH = 35;
const USER_AVATAR_HEIGHT = 35;

const createCommentsList = ({comments}) => {
  const commnetsContainerNode = document.querySelector('.social__comments');
  commnetsContainerNode.innerHTML= '';
  comments.forEach((comment) => {
    const commentElementNode = document.createElement('li');
    const userMessageNode = document.createElement('p');
    const userAvatarNode = document.createElement('img');
    commentElementNode.classList.add('social__comment');
    userMessageNode.classList.add('social__text');

    userAvatarNode.src = comment.avatar;
    userAvatarNode.alt = comment.name;
    userAvatarNode.width = USER_AVATAR_WIDTH;
    userAvatarNode.height = USER_AVATAR_HEIGHT;
    userMessageNode.textContent = comment.message;

    commentElementNode.appendChild(userAvatarNode);
    commentElementNode.appendChild(userMessageNode);
    commnetsContainerNode.appendChild(commentElementNode);
  });
};

const createFullSizePhoto = ({url, description, likes, comments}) => {
  const fullSizePhotoNode = document.querySelector('.big-picture__img');
  const imgElementNode = fullSizePhotoNode.querySelector('img');
  const countLikesNode = document.querySelector('.likes-count');
  const countCommentsNode = document.querySelector('.comments-count');
  const descriptionPhotoNode = document.querySelector('.social__caption');

  imgElementNode.src = url;
  countLikesNode.textContent = likes;
  countCommentsNode.textContent = comments.length;
  descriptionPhotoNode.textContent = description;

  createCommentsList({comments});
};

export {createFullSizePhoto};
