// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  //Solution 1
  // reverse() is a built-in array method that does just the job
  return (
    str
      // we just need to convert our string to an array first using split('')
      .split("")
      // then use the reverse() method on the result
      .reverse("")
      // and finally return the solution by converting the array back to a string using join('')
      .join("")
  );
  // Solution 2
  /*  
  let reversedString = "";
  for (let character of str) {
    reversedString = character + reversedString;
  }
  return reversedString;*/
  // Solution 3
  // reduce() method takes in 2 parameters : an arrow function and an initial value for the function
  // first parameter of arrow function is the reversedString, and the second parameter is the character we're operating right now
  // return str.split("").reduce((rev, char) => char + rev, "");
  // same logic as solution 2
  //return character + reversedString;
}

module.exports = reverse;
