const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

console.log('Ingredients:\n')
let i = 0;
while (i < ingredients.length) {
  console.log(ingredients[i]);
  i++
}

// Write a for loop that prints out the contents of ingredients:

console.log('Ingredients:\n');
for (let i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

// Does the same, but simpler - ONLY WORKS IF YOU GO THROUGH THE ENTIRE ARRAY IN ORDER. NO REVERSE, NO SKIPPING

console.log('Ingredients:\n');
for (ingredient of ingredients) {
  console.log(ingredient);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
// let reverseIngredients = Ingredients.reverse(); console.log(reverseIngredients); would do the same, but the exercise here requires using for or while, so, there you go

console.log('Ingredients:\n');
for (let i = (ingredients.length - 1); i >= 0; i--) {
  console.log(ingredients[i]);
}