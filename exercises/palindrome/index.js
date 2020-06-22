// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// if you have multiple solutions to a pbm during an interview, let the interviewer know!
// always start by the less efficient solution than suggest the best one


function palindrome(str) {
    // solution 1 : ARRAY.REVERSE()
    const rev = str.split('').reverse().join('');
    // alternative code : return str === rev;
    return (rev === str) ? true : false;


    //solution 2 : ARRAY.EVERY()
    // we'll compare if first and last characters are the same and so on
    // if same, return true
    // pbm is that solution takes twice as much time as the previous one, address it during an interview
    //first step : turn string to array
    /*return str.split('').every((char, i) => {
        //char is the current element considered
        // to get access to the element on the other side :
        //step 1 : at i=0, it is at index str.length -1
        // step 2 : from i=1 , we need to reflect the increment by substracting it from the index : str.length-i-1 
        return char === str[str.length - i - 1] ? true : false;
    });*/

}

module.exports = palindrome;