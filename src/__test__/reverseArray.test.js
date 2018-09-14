'use strict';

const codeChallenges = require('../lib/reverseArray');


describe('#reverseArray', () => {
  test('should work given a small array, i.e. 3 numbers', () => {
    expect(codeChallenges.reverseArray([4, 2, 3])).toEqual([3, 2, 4]);
  });
  test('should work given a large even array, i.e. 12 numbers', () => {
    const bigArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    expect(codeChallenges.reverseArray(bigArray)).toEqual(bigArray.reverse());
  });
  test('should work given a large odd array, i.e. 13 numbers', () => {
    const bigOddArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    expect(codeChallenges.reverseArray(bigOddArray)).toEqual(bigOddArray.reverse());
  });
});
