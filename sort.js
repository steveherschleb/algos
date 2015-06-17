/*
 * Sort Algos 
 * 
 * A collection of basic sort algorithms.
 *
 * Writen by Steve Herschleb
 * Copyright 2015
 * 
 * MIT License
 */
module.exports = {
  /*
   * Test is the array is sorted in ascending order
   *
   * Time: O(n)
   * Memory: O(1)
   *
   */
  isSorted: function (data) {
    
    //Just return true if an array of at least 2 elements is not passed in
    if (!data || data.length < 2) {
      return true;
    }

    //Assume the array is sorted
    var sorted = true;
    
    //Loop through the array and make sure each element is larger than the preceeding one
    for (var i=1, len=data.length;i<len;i++) {
      if (data[i] < data[i-1]) {
        //Uh oh, the array is not sorted!
        sorted = false;
        break;
      }
    }

    return sorted;
  },
  

  /*
   * The classic merge sort. Divide and conquer, baby.
   *
   * Learn more: https://en.wikipedia.org/wiki/Merge_sort
   *
   * Time: avg: O(log n), worst: O(log n)
   * Memory: O(n)
   *
   */
  merge: function (data) {
    
    function merging(left, right) {
      var output = [];

      //Loop through the sorted arrays, taking the correct element
      while (left.length && right.length) {
        if (left[0] < right[0]) {
          output.push(left.shift());
        } else {
          output.push(right.shift());
        }
      }
      
      //Add any left overs from the left array
      while (left.length) { 
        output.push(left.shift());
      }
      
      //Add any left overs from the right array
      while (right.length) { 
        output.push(right.shift());
      }

      return output;
    }
   
    //base case
    if (data.length < 2) {
      return data;
    }

    //split the array
    var mid = parseInt(data.length / 2, 10);
    var left = data.slice(0, mid);
    var right = data.slice(mid);

    //recursively merge the arrays back together
    return merging(this.merge(left), this.merge(right));
  },


  /*
   * Quick sort -> very fast in place sort and commonly used. This is actually much faster
   * than the built in .sort() method. Try it out on a large dataset! The built in one is 
   * stable and must handle sparse arrays, so that's why it's slower.
   *
   * Learn more: https://en.wikipedia.org/wiki/Quicksort
   *
   * Time: avg: O(log n), worst: O(n^2)
   * Memory: O(1)
   *
   */
  quick: function (data, left, right) {
    left = typeof(left) === 'undefined' ? 0 : left;
    right = typeof(right) === 'undefined' ? data.length - 1 : right;

    if (left >= right) {
      return;
    }
    
    //Grab the middle value for the pivot
    var pivot = data[(left + right)>>1];
    var leftNew = left;
    var rightNew = right;
    
    do {
      while (data[leftNew] < pivot) {
        leftNew++;
      }

      while (data[rightNew] > pivot) {
        rightNew--;
      }
      
      //Check is a swap is needed
      if (leftNew <= rightNew) {
        var temp = data[leftNew];
        data[leftNew] = data[rightNew];
        data[rightNew] = temp;
        leftNew++;
        rightNew--;
      }
    } while (leftNew <= rightNew);

    //Divide and conquer!
    this.quick2(data, left, rightNew);
    this.quick2(data, leftNew, right);
  },
 

  /*
   * Bubble sort -> Pretty much the worst sort. At least its in place.
   * Learn more: https://en.wikipedia.org/wiki/Bubble_sort
   *
   * Time: avg: O(n^2)
   * Memory: O(1)
   */
  bubble: function (data) {
    var swapped;
    var m = data.length - 1;

    do {
      var swapped = false;
      
      for (var i=0; i<m;i++) {
        //check if items are out of order
        if (data[i] > data[i+1]) {
          //Swap!
          var temp = data[i];
          data[i] = data[i+1];
          data[i+1] = temp;
          swapped = true;
        }
      }
      
      //The last item is in it's correct place, so no need to check it again
      m--;
    } while (swapped);

    return data;
  },

  /*
   * Insertion sort -> Very basic sort that's easy to implement and one of the fastest on small arrays. 
   * Learn more: https://en.wikipedia.org/wiki/Insertion_sort
   *
   * Time: avg: O(n^2)
   * Memory: O(1)
   *
   */
  insertion: function (data) {
    for (var i=1;i<data.length;i++) {
      //Save the current element
      var temp = data[i];
      var j = i;

      //Insert the element to the left where it's needed (or keep it in the same place)
      while (j >= 0 && data[j-1] > temp) {
        //Shift the element to the right
        data[j] = data[j-1];
        j--;
      }
      data[j] = temp;
    }
    
    return data;
  },

  /*
   * Selection sort -> Another basic sort that works well for small inputs.
   * Learn more: https://en.wikipedia.org/?title=Selection_sort
   *
   * Time: avg: O(n^2)
   * Memory: O(1)
   *
   */
  selection: function (data) {
    var length = data.length;

    for (var i=0; i<length;i++) {
      //Assume the first element is the smallest
      var min = i;
      
      //Search the rest of the array to see if there is a smaller element
      for (var j=i+1; j<length;j++) {
        if (data[j] < data[min]) {
          //Save new smallest element
          min = j;
        }
      }
      
      //Check if a swap is needed
      if (i !== min) {
        //Swap!
        var temp = data[i];
        data[i] = data[min];
        data[min] = temp;
      }
    }
    
    return data;
  },
};
