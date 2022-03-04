const COUNT_DESCRIPTION = 25;
const COUNT_COMMENT = 2;
const MIN_VALUE_USER_ID = 1;
const MAX_VALUE_USER_ID = 50;
const MIN_VALUE_USER_AVATAR = 1;
const MAX_VALUE_USER_AVATAR = 6;
const MIN_VALUE_LIKE = 15;
const MAX_VALUE_LIKE = 200;

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

const getNonRepeatingInt = (min, max) => {
  if(getNonRepeatingInt.values === undefined) {
    getNonRepeatingInt.values = [];
  }

  let result;

  for (let i = 0; i <= 50; i++) {
    result = getRandomInt(min, max);

    if(!getNonRepeatingInt.values.includes(result)) {
      getNonRepeatingInt.values.push(result);
      return result;
    }
  }

  throw new Error ('Не удалось сгенерировать число');
};

const getRandomArrayElement = (array) => {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
};

const checkStringLength = (str, length) => {
  if(str.length <= length) {
    return true;
  }

  return false;
};


const createCommentsList = () => {
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
};


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

createPhotoDescription(COUNT_DESCRIPTION);
checkStringLength(1, 2);
