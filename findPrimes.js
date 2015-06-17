/*
 * findPrimes 
 * 
 * This finds the nth prime number. It will take a while for it to calc 2^(57,885,161) - 1
 * If you didn't catch that reference see: https://en.wikipedia.org/wiki/Largest_known_prime_number
 *
 * This algo basically just uses the rules of prime numbers (only divisible by itself and 1) to find the answer.
 * Furthermore, it forgoes lots of calculations by only checking to see if the "test" number is divisible by the list
 * of primes it has already found. This shortcut works because all non-prime numbers can be represented by their prime
 * factors. Also, you can stop checking at the sqrt of the number since any factors would just be the inverse.
 *
 * Writen by Steve Herschleb
 * Copyright 2015
 * 
 * MIT License
 */


module.exports = function (n) {
  var primes = [2];
  var test = 3;
  
  if (n < 1) {
    return [];
  }

  while (primes.length < n) {
    var isPrime = true;
    var limit = Math.ceil(Math.sqrt(test));
    var x = 0;

    while(primes[x] < limit) {
      if (test % primes[x] === 0) {
        isPrime = false;
        break;
      }
      x++;
    }
    
    if (isPrime) {
      primes.push(test);
    }
    
    test += 2;
  }

  return primes;
};
