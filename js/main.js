//Первую функцию взял из ссылки и доработал :) https://learn.javascript.ru/task/random-int-min-max

const getRandomInt = (min, max) => {
  const rand = min + Math.random() * (max - min);
  if (max > min) {
    return Math.round(rand);
  } else if (max < min || max === min) {
    return 'Недопустимое значение';
  }
};

const checkStringLength = (str, length) => {
  const stringLength = str.length <= length ? 'Длина прошла проверку' : 'Длина не прошла проверку';
  return stringLength;
};

getRandomInt(20, 20);
checkStringLength('fffffff', 6);
