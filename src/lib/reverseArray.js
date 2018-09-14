'use strict';

const codechallenges = module.exports = {};

codechallenges.reverseArray = (array) => {
  let temp = 0;

  for (let i = 0; i < array.length / 2; i++) {
    temp = array[i];
    array[i] = array[array.length - i - 1];
    array[array.length - i - 1] = temp;
  }
  return array;
};
