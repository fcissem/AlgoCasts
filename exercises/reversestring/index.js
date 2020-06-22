// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {

  //lets add a debugger : step 1 =>
  debugger;

  //Solution 1 : ARRAY.REVERSE()
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




  // Solution 2 : FOR LOOP
  /*  
  let reversedString = "";
  for (let character of str) {
    reversedString = character + reversedString;
    debugger;
  }
  return reversedString;*/





  // Solution 3 : ARRAY.REDUCE()
  // reduce() method takes in 2 parameters : an arrow function and an initial value for the function
  // first parameter of arrow function is the reversedString, and the second parameter is the character we're operating right now
  // return str.split("").reduce((rev, char) => char + rev, "");
  // same logic as solution 2
  //return character + reversedString;
}

//lets add a debugger : step 2 => call the reverse function
//reverse('apple');

// lets add a debugger : step 3 => use terminal to launch debugger mode
// cd reversestring
// node inspect index.js
// then debug> 'inspector' waits for instruction
// type cont for continue inspecting and executing the file(in case of for loop press c as many times as necessary)
// debug> 'inspector' stops when it arrives at line 'debugger;' of our code
// now we can inspect variables of our code, but we need to type repl next to debug>
// then to look at variable string in detail, type str, it will return the value taken by the function :'apple'
// we can also check validity of code by copying it in terminal
// this one for ex : return str.split("").reduce((rev, char) => char + rev, "");
// if the output is 'elppa', it means the code is valid!
// to exit the repl : ctrl+C to get to debugger mode
// and ctrl +C agin to exit completely debugger mode


// when done with debugging, remove debugger; and called function reverse('apple').

module.exports = reverse;