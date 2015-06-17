var division = require('../division');

describe('The silly division algo should', function () {

  it('correcty divide an easy one', function () {
    expect(division(2,2)).toBe(1);
  });

  it('a decimal answer should go to the floor', function () {
    expect(division(3,2)).toBe(1);
  });
  
  it('a decimal answer should go to the floor', function () {
    expect(division(13,7)).toBe(1);
  });
  
  it('handle division by zero!', function () {
    expect(division(3,0)).toBe(-1);
  });
});
