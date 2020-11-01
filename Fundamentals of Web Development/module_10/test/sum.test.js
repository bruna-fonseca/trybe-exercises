const sum = require('../src/sum.js');

describe('testing the sum function', () => {
  it ('should be 9 the sum with 4 and 5', () => {
    expect(sum(5,4)).toBe(9);
  });

  it('should be 0 the sum with 0 and 0', () => {
    expect(sum(0,0)).toBe(0);
  })

  it('should throw an error if called without a number', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(Error);
  })

  it('should throw the error "parameters must be numbers" if called without a number', () => {
    expect(()=> {
      sum(4,'5');
    }).toThrowError(new Error('parameters must be numbers'));
  });
});

