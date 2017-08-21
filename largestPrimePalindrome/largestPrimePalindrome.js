/*
 * Create a function that returns the largest prime palindrome less than 1000.
 * Hint: it's 929
 * You will first want to determine if the number is a palindrome and then determine if it is prime.
 * A palindrome is a number that is the same forwards and backwards: 121, 323, 123454321, etc.
 * Extra credit: Modify the function to look for the largest prime palindrome less than any provided number.
 * Extra credit 2: How can you improve the time complexity?  (Google: Sieve of Eratosthenes)
 */

 const primePalindrome = () => {
   const isPalindrome = (n) => {
     if (n === Number(n.toString().split('').reverse().join(''))) return true;
   }
   const isPrime = (n) => {
     if (n %2 !== 0) {
       for (let j = 3; j <= Math.sqrt(n); j++) {
         if (n % j === 0) return false;
       }
       return true;
     }
   }
   for (let i = 1000; i > 0; i--) {
     if (isPalindrome(i) && isPrime(i)) return i;
   }
 };

 console.log(primePalindrome());
