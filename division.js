/*
 * Division without division 
 *
 * For some reason, if you wanted to divide without using the division operator, you could
 * do something similar to this. It's recommended that you just use "/" for all your needs.
 *
 * Writen by Steve Herschleb
 * Copyright 2015
 * 
 * MIT License
 */

module.exports = function divide(x, y) {
 
  //Check for divide by zero
  if (y === 0) {
    return -1;
  }
  
  //base cases
  if (x < y) {
    return 0;
  } else if (x === y) {
    return 1;
  } else if (y === 1) {
    return x;
  }

  //init
  var q = 1;
  var val = y;

  while (val < x) {
    val = val << 1;
    q = q << 1;
  }
  
  //Check for overflow
  if (val > x) {
    val = val >> 1;
    q = q >> 1;
    
    return q + divide(x-val, y);
  }

  return q;
};
