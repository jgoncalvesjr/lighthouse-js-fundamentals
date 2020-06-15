const whichSchool  = function (age) {
  // Your code in here ...
  if (age < 13) {
    return 'Elementary School';
  } else if (age >= 13 && age <= 18) {
    return 'Secondary School';
  } else {
    return 'Lighthouse Labs';
  }
}

console.log(whichSchool(8));
console.log(whichSchool(15));
console.log(whichSchool(39));