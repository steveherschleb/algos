/*
 * The (in)famous Fizz-Buzz Interview Question 
 *
 * Print out the numbers from 1 to 100, but to make it more interesting there's a twist.
 * If the number is divisible by 3, print "Fizz". If the number is divisible by 5, print "Buzz". 
 * If the number is divibible by both 3 and 5 (aka divisible by 15), print FizzBuzz. 
 *
 * I saw some crazy stat that a decent portion of CS graduates could not solve this problem. 
 * I seriously hope that's not true.
 *
 * Writen by Steve Herschleb
 * Copyright 2015
 * 
 * MIT License
 */

(function fizzBuzz() {

  for (var i=1;i<101;i++) {
    var output = '';

    if (!(i % 3)) { output += 'Fizz'; }
    if (!(i % 5)) { output += 'Buzz'; }
    
    console.log(output || i);
  }
})();
