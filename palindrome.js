/*
 * isPalindrome 
 * 
 * Checks to see if a string input is a palindome. There are many ways to do this, 
 * but I think this is the most efficient.  
 *
 * Time: O(n)
 * Memory: O(1)
 *
 * Writen by Steve Herschleb
 * Copyright 2015
 * 
 * MIT License
 */

module.exports = function (input, options) {
  
  options = options || {};

  if (options.ignoreSpaces) {
    input = input.replace(/\s+/g, '');
  }
  
  if (options.ignoreCase) {
    input = input.toLowerCase();
  }

  var output = true;
  var a = 0;
  var b = input.length - 1;

  while (a < b) {
    if (input[a] !== input[b]) {
      output = false;
      break;
    }

    a++;
    b--;
  }

  return output;
}
