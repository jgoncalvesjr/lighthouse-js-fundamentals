/*
 * Programming Quiz: Facebook Friends (7-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an object `facebookProfile`
 * - The `facebookProfile` object should have the `name` (string), `friends` (number), and `messages` (array of strings) property
 * - Your `facebookProfile` object should have the `postMessage()`, `deleteMessage()`, `addFriend()` and `removeFriend()` method
 * - Carefully implement the desired functionality of each method, as decribed above
 */


// TIP - 
// In an array, 
// - addition at the end is done using push() method
// - addition at a specific index is done using splice() method
// - deletion from the beginning is done using pop() method
// - deletion from a specific index is done using splice() method

// your code goes here

let facebookProfile = {
  name: 'Joao Junior',
  friends: 0,
  messages: [],
  addFriend: () => {
    facebookProfile.friends++; 
  },
  removeFriend: () => {
    if (facebookProfile.friends > 0) {
      facebookProfile.friends--;
    } else {
      return 'You don\'t have any friends!';
    }
  },
  postMessage: (message) => {
    facebookProfile.messages.push(message);
  },
  deleteMessage: (index) => {
    facebookProfile.messages.splice(index, 1);
  }
};

facebookProfile.postMessage('trololol');
console.log(facebookProfile.messages);
console.log(facebookProfile.removeFriend());