/*
 * Look And Say Algorithm
 *
 * This generates the very silly look and say sequence from an initial seed and the number of iterations.
 * For more info on look and say sequences see: https://www.youtube.com/watch?v=ea7lJkEhytA
 * 
 * Note: for large n, this gets out of hand rather quickly.
 *
 * Writen by Steve Herschleb
 * Copyright 2015
 * 
 * MIT License
 */

module.exports = function lookAndSay(seed, n) {

  var result = seed.toString();

  for (var i=0; i < n; i++) {
    
    var test = result[0];
    var repeat = 0;
    var temp = '';

    for (var x=0; x < result.length; x++) {
      if (test === result[x]) {
        repeat++;
      } else {
        temp += repeat.toString() + test;
        test = result[x];
        repeat = 1;
      }
    }
    
    //Add the final digit
    temp += repeat.toString() + test;
    result = temp; 
  }

  return result;
};
