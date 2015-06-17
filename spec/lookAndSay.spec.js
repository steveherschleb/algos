var lookAndSay = require('../lookAndSay');

describe('The look and say algo', function () {

  it('should calc the correct value for n=1, seed=1', function () {
    expect(lookAndSay(1,1)).toBe('11');
  });

  it('should calc the correct value for n=5, seed=1', function () {
    expect(lookAndSay(1,5)).toBe('312211');
  });
  
  it('should calc the correct value for n=1, seed=9', function () {
    expect(lookAndSay(9,5)).toBe('1113122119');
  });
});
