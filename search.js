/*
 * Search Algos 
 * 
 * A collection of basic search algorithms.
 *
 * Writen by Steve Herschleb
 * Copyright 2015
 * 
 * MIT License
 */

module.exports = {
  
  /* 
   * Binary Search - Array must be pre-sorted! It's a basic recursive divide and conquer algo. 
   *
   * Time: O(log n)
   * Memory: O(1)
   *
   */
  binary: function (data, val, low, high) {
    if (typeof(low) === 'undefined') {
      low = 0;
    }
    
    if (typeof(high) === 'undefined') {
      high = data.length - 1;;
    }

    //Get mid point
    var mid = low + ((high - low) >> 1);

    if (data[mid] === val) {
      //We found our winner!
      return mid;
    } else if (low > high) {
      //Value is not in the array
      return -1;
    } else if (data[mid] > val) {
      return this.binary(data, val, low, mid - 1);
    } else {
      return this.binary(data, val, mid + 1, high);
    }
  },


  /* 
   * Linear Search - A very basic but simple search. Works on non-sorted arrays. 
   *
   * Time: O(n)
   * Memory: O(1)
   *
   */
  linear: function (data, val, index) {
    if (typeof(index) === 'undefined') {
      index = data.length;
    }
    
    index--;

    if (!index) {
      return -1;
    } else if (data[index] === val) {
      return index;
    } else {
      return this.linear(data, val, index);
    }
  },
};
