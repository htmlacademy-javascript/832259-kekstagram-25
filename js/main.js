//Первую функцию взял из ссылки и доработал :) https://learn.javascript.ru/task/random-int-min-max

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

const checkStringLength = (str, length) => {
  if(str.length <= length) {
    return true;
  }

  return false;
};

getRandomInt(0, 20);
checkStringLength('ffffjjjjjjjjjjjjjjjjjfff', 30);
