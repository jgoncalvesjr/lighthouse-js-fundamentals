const isOdd  = num => {
  return num % 2 !== 0; // If num isn't 0, then it's odd, so true; else; false
};

console.log("3 is odd: " + isOdd(3));
console.log("8 is odd: " + isOdd(8));