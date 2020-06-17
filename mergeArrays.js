function merge(arrayA, arrayB) {
  for (let i = 0; i < arrayB.length; i++) {
    arrayA.push(arrayB[i]);  // adds each element of arrayB into arrayA
  }
  arrayA.sort(); // sorts merged array as required
  return arrayA; // returns new merged array
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);