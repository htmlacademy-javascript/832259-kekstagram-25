import {getNonRepeatingInt} from '../util.js';
import {getRandomInt} from '../util.js';
import {getRandomArrayElement} from '../util.js';

const COUNT_COMMENT = 2;
const MIN_VALUE_USER_ID = 1;
const MAX_VALUE_USER_ID = 1000;
const MIN_VALUE_USER_AVATAR = 1;
const MAX_VALUE_USER_AVATAR = 6;

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Артем',
  'Дмитрий',
  'Андрей',
  'Василий',
  'Константин'
];

function createCommentsList () {
  const commentsList = [];

  for (let i = 1; i <= COUNT_COMMENT; i++) {
    commentsList.push({
      id: getNonRepeatingInt(MIN_VALUE_USER_ID, MAX_VALUE_USER_ID),
      avatar: `img/avatar-${getRandomInt(MIN_VALUE_USER_AVATAR, MAX_VALUE_USER_AVATAR)}.svg`,
      message: getRandomArrayElement(MESSAGES),
      name: getRandomArrayElement(NAMES)
    });
  }

  return commentsList;
}

export {createCommentsList};
