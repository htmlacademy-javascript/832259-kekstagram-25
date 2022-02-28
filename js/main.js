const COUNT = 25;
const MIN_VALUE = 1;
const MAX_VALUE_ID = 25;
const MAX_VALUE_AVATAR = 6;
const MIN_VALUE_LIKE = 15;
const MAX_VALUE_LIKE = 200;

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Артем',
  'Дмитрий',
  'Андрей',
  'Василий',
  'Константин'
];

const getRandomInt = (min, max) => {
  if(max < min || max === min) {
    throw new Error('Данное зачение использоваться не может.');
  }

  if (min < -1) {
    throw new Error('Значение не может быть меньше 0.');
  }

  const rand = min + Math.random() * (max - min);

  return Math.round(rand);
};

const getRandomArrayElement = (num) => {
  const random = Math.floor(Math.random() * num.length);
  return num[random];
};

const checkStringLength = (str, length) => {
  if(str.length <= length) {
    return true;
  }

  return false;
};


const createCommentsList = () => {
  const commentsList = [];

  for (let i = 0; i <= MIN_VALUE; i++) {
    commentsList.push({
      id: getRandomInt(MIN_VALUE, MAX_VALUE_ID),
      avatar: `img/avatar-${getRandomInt(MIN_VALUE, MAX_VALUE_AVATAR)}.svg`,
      message: getRandomArrayElement(messages),
      names: getRandomArrayElement(names)
    });
  }

  return commentsList;
};


const createPhotoDescription = (amount) => {
  const photoData = [];

  for (let i = 1; i <= amount; i++) {
    photoData.push({
      id: getRandomInt(MIN_VALUE, MAX_VALUE_ID),
      url: `photos/${i}.jpg`,
      description: 'Описание фотографии',
      likes: getRandomInt(MIN_VALUE_LIKE, MAX_VALUE_LIKE),
      comments: createCommentsList()
    });
  }

  return photoData;
};

createPhotoDescription(COUNT);
checkStringLength(1, 2);
