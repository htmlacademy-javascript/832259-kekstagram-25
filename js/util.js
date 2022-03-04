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

checkStringLength(1, 2);

export {getRandomInt};
export {getNonRepeatingInt};
export {getRandomArrayElement};
