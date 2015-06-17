var search = require('../search');
var test = [1,10,20,27,47,59,63,75,88,99];

describe('The binary search should', function () {
  it('find the index for a match', function () {
    expect(search.binary(test, 20)).toBe(2);
  });

  it('find the index for a miss on the low end', function () {
    expect(search.binary(test, -5)).toBe(-1);
  });
  
  it('find the index for a miss on the high end', function () {
    expect(search.binary(test, 1000)).toBe(-1);
  });
});


describe('The linear search should', function () {
  it('find the index for a match', function () {
    expect(search.linear(test, 20)).toBe(2);
  });

  it('find the index for a miss on the low end', function () {
    expect(search.linear(test, -5)).toBe(-1);
  });
  
  it('find the index for a miss on the high end', function () {
    expect(search.linear(test, 1000)).toBe(-1);
  });
});
