// Create a function named camelCase that will convert a string to camel case, and return the result.

// This exercise was stored in a Secret Gist, as requested. Git placement for progress reference only.

const camelCase = input => {
  newInput = '';
  for (i = 0; i < input.length; i++) {
    if (input[i] === ' ') {
      // MUST have this check or else compilation will fail when last char of string is a whitespace
      if (i+1 >= input.length) { 
        return newInput;
      } else {
        newInput += input[i+1].toUpperCase();
        i++;
      }
    } else {
      newInput += input[i]
    }
  }
  return newInput;
};

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious "));
console.log(camelCase("it is over nine thousand!"));