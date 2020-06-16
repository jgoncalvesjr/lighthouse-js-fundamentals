const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

const finalPosition = function (moves) {
  const position = [0,0]; // Array with mapped positions set to starting place [0,0]
  // Loop to go through moves
  for (const move of moves) {
    // Conditional to verify Y axis 
    if (move === 'north') {
      position[1]++; // axis Y goes UP 
    } else if (move === 'south') {
      position[1]--; // axis Y goes DOWN
    }
    // Conditional to verify X axis
    if (move === 'east') {
      position[0]++; // axis X goes RIGHT
    } else if (move === 'west') {
      position[0]--; // axis X goes LEFT
    }
  }
  return position; // Stores information
};

console.log(finalPosition(moves)); // Prints Array with [X,Y] position