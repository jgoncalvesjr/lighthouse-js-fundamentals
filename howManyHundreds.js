function howManyHundreds (num) {
  let hundreds; // Variable to store results
  if (num % 100 === 0) { // Conditional: if number modulo of 100 is zero, than it has n hundreds
    hundreds = num / 100; // Determines hundreds
  } else {
    let remaninder = num % 100; // The remainder of a modulo of 100 is always a number + n hundreds
    num = num - remaninder; // Rounding number to divisible by 100
    hundreds = num / 100; // Determines hundreds
  }
  return hundreds; // Stores information
}

// Prints results

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(-894)); // After all, you MAY count negative hundreds with this function
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));