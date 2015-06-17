var isPalindrome = require('../palindrome');

describe('The palindrome checker should', function () {
  
  it('work for words with an odd number of characters', function () {
    expect(isPalindrome('level')).toBe(true);
  });
  
  it('work for upper case words', function () {
    expect(isPalindrome('LEVEL')).toBe(true);
  });
  
  it('work for words with funny capitalization', function () {
    expect(isPalindrome('LeVeL')).toBe(true);
  });
  
  it('work for words with invalid capitalization', function () {
    expect(isPalindrome('LeVel')).toBe(false);
  });
  
  it('work for words with invalid capitalization when that is ignored', function () {
    expect(isPalindrome('LeVel', { ignoreCase: true })).toBe(true);
  });
  
  it('work for multiple words', function () {
    expect(isPalindrome('a nut for a jar of tuna', { ignoreSpaces: true })).toBe(true);
  });
  
  it('work for multiple words that are not a palindrome', function () {
    expect(isPalindrome('a nut for a jar of tuna fish', { ignoreSpaces: true })).toBe(false);
  });
  
  it('work for words with an even number of characters', function () {
    expect(isPalindrome('deed')).toBe(true);
  });

  it('work for numbers with an odd number of digits', function () {
    expect(isPalindrome('1234321')).toBe(true);
  });
  
  it('work for numbers with an even number of digits', function () {
    expect(isPalindrome('123321')).toBe(true);
  });
  
  it('work for numbers that are not palindromes', function () {
    expect(isPalindrome('123329')).toBe(false);
  });

});
