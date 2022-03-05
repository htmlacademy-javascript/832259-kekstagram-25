import {createCommentsList} from './comments.js';
import {getRandomInt} from '../util.js';


const COUNT_DESCRIPTION = 25;
const MIN_VALUE_LIKE = 15;
const MAX_VALUE_LIKE = 200;

const createPhotoDescription = (amount) => {
  const photoDescription = [];

  for (let i = 1; i <= amount; i++) {
    photoDescription.push({
      id: i,
      url: `photos/${i}.jpg`,
      description: 'Описание фотографии',
      likes: getRandomInt(MIN_VALUE_LIKE, MAX_VALUE_LIKE),
      comments: createCommentsList()
    });
  }

  return photoDescription;
};

export {createPhotoDescription};
