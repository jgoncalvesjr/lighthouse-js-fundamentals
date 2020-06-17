function range(start, end, step) {
  let result = [];
  // Conditional non-negative as required - MUST NOT ALLOW 0, OR ELSE INFINITE LOOP AND CRASH!
  if (step > 0) {
    for (start; start <= end; step) {
      result.push(start); // Array value push
      start += step; // Array value increment, as required
    }
  }
  return result; // Stores array
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(-5, 2, 0));
console.log(range(3, 3, 3));
console.log(range(-5, 2, -3));
console.log(range(-5, 3));
console.log(range('ahoo', 2, 3));
