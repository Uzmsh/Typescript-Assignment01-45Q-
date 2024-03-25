// 1 equality and inequality with strings
var stone = 'diamond';
console.log("Is stone == 'diamond'? I predict True.");
console.log(stone == 'diamond');
// True
console.log("Is stone != 'quartz'? I predict True.");
console.log(stone != 'quartz');
// True
console.log("Is stone == 'diamond'? I predict False.");
console.log(stone == 'diamond');
// False
//2 Tests using the lower case function
var city = 'ziarat';
console.log("Is city.toLowerCase() == 'ziarat'? I predict True.");
console.log(city.toLowerCase() == 'ziarat');
// True
console.log("Is city.toLowerCase() == 'lasbela'? I predict False.");
console.log(city.toLowerCase() == 'lasbela');
// False
// Numerical tests involving equality and inequality, greater than and less than, 
//greater than or equal to, and less than or equal to:
var num1 = 100;
var num2 = 55;
console.log("Is num1 == num2? I predict False.");
console.log(num1 == num2);
// False
console.log("Is num1 != num2? I predict True.");
console.log(num1 != num2);
// True
console.log("Is num1 > num2? I predict True.");
console.log(num1 > num2);
// True
console.log("Is num1 < num2? I predict False.");
console.log(num1 < num2);
// False
console.log("Is num1 >= num2? I predict True.");
console.log(num1 >= num2);
// True
console.log("Is num1 <= num2? I predict False.");
console.log(num1 <= num2);
// False
//Tests using "and" and "or" operators
var isSummer = true;
var isRaining = false;
console.log("Is it summer and not raining? I predict True.");
console.log(isSummer && !isRaining); // True
console.log("Is it summer or raining? I predict True.");
console.log(isSummer || isRaining); // True
//Test whether an item is in an array
var animals = ['dog', 'cat', 'rabbit'];
console.log("Is 'cat' in the animals array? I predict True.");
console.log(animals.indexOf('cat') !== -1); // True
console.log("Is 'lion' in the animals array? I predict False.");
console.log(animals.indexOf('lion') !== -1); // False
//Test whether an item is not in an array
var colors = ['red', 'green', 'blue'];
console.log("Is 'yellow' not in the colors array? I predict True.");
console.log(colors.indexOf('yellow') === -1); // True
console.log("Is 'green' not in the colors array? I predict False.");
console.log(colors.indexOf('green') === -1); // False
