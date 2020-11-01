const myRemove = require('../src/myRemove');

describe('function receives an array and return the copy array without an element "item"', () => {
  
  it('should remove number 3 in the array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1,2,4])
  });

  it('should not return [1, 2, 3, 4] if 2nd param is 3', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('should not change the original array', () => {
    const arr = [1, 2, 3, 4];
    myRemove(arr, 1);
    expect(arr).toEqual([1, 2, 3, 4]);
  });

  it('should myRemove function return the same array in this case', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  })
});