function calculateRectangleArea(length, width) {
  // Basic geometry verification - no zero, negative or non-numeric parameters
  if (length <= 0 || length === isNaN || width <= 0 || width === isNaN) {
    return undefined;
  } else {
    return (length * width); // Area caculated and stored
  }
}
  
function calculateTriangleArea(base, height) {
  // Basic geometry verification - no zero, negative or non-numeric parameters
  if (base <= 0 || base === NaN || height <= 0 || height === isNaN) {
    return undefined;
  } else {
    return (base * height) / 2; // Area caculated and stored
  }
}

function calculateCircleArea(radius) {
  // Basic geometry verification - no zero, negative or non-numeric parameters
  if (radius <= 0 || radius === NaN) {
    return undefined;
  } else {
    return Math.PI * (radius * radius); // Area caculated and stored
  }
}
console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined