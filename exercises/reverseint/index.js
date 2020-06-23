// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//TRICK 1 : convert numbers to a string by using toSTRING() method,
//then convert string result to array using SPLIT('')/ back to string using JOIN('')

//TRICK 2 : built-in javascript function included in Math library
//it's MATH.SIGN()

//TRICK 3 : to convert a string to a number, use parseInt(string)

function reverseInt(n) {
  //SOLUTION 1 : IF STATEMENT
  //STEP 1 : rev is a reversed string
  const rev = n.toString().split("").reverse().join("");
  //STEP 2 : reversed string converted back to a number using parseInt()
  const revInt = parseInt(rev);
  //STEP 3: conditional statement
  //return (n < 0) ? revInt * -1 : revInt;

  //SOLUTION 2 : MATH.SIGN()
  //alternative to previous STEP 3 is as follows:
  return revInt * Math.sign(n);
}

module.exports = reverseInt;
