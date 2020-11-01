const myRemoveWithoutCopy = require('../src/myRemoveWithoutCopy.js');

describe('testing myRemoveWithoutCopy function', () => {
  it('should return [1, 2, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('should not return [1, 2, 3, 4]', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('should verify the passed array is not change', () => {
    const arr = [1, 2, 3, 4, 5];
    myRemoveWithoutCopy(arr, 1);
    expect(arr).toEqual([2, 3, 4, 5]);
  });
  it('should not change anything in array', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});