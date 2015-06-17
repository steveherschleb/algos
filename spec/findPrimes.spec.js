var primes = require('../findPrimes');

describe('The find primes should', function () {

  it('find the first 5 primes', function () {
    expect(primes(5)).toEqual([2,3,5,7,9]);
  });
  
  it('find the first prime (1 is not prime!)', function () {
    expect(primes(1)).toEqual([2]);
  });
  
  it('find the first 10 primes', function () {
    expect(primes(10)).toEqual([2,3,5,7,9,11,13,17,19,23]);
  });
  
  it('find a negative prime (primes cannot be negative!)', function () {
    expect(primes(-5)).toEqual([]);
  });
  
  it('find the 0th prime)', function () {
    expect(primes(0)).toEqual([]);
  });
});
