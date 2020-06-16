// Functions - part 1

const sayHello  = function (name) {
  console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");

// Functions - part 2 (Return x console.log)

const sayHelloToConsole  = function (name) {
  console.log("Hello, " + name);
}
sayHelloToConsole('John'); // returns to console, but does NOT store info

const returnSayHello  = function (name) {
  return "Hello, " + name;
}
const greeting = returnSayHello('John'); // stores info, but does NOT return to console unless called
console.log(greeting); 