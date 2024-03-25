//  an array containing guests
var guestList = ["Aishay Noor", "Umm-e-Habiba", "Fasiha Zaib"];
var notcomming = guestList[1];
console.log(notcomming, "is not comming");
//replace with new guest 
guestList.splice(1, 1, "Fatima");
//  forEach func to print a message invite
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\nYou are cordially invited to dinner at my place. Please join us for an evening of good food and stimulating conversation.\nBest regards\n    "));
});
// Inform people about the bigger dinner table
console.log("Good news! We found a bigger dinner table!\n");
// Add one new guest to the beginning of the array
guestList.unshift("Hira");
// Add one new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Mirha");
// Add one new guest to the end of the array using push
guestList.push("Fatima");
// Print a new invitation messages
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\nYou are cordially invited to dinner at my place. Please join us for an evening of good food and stimulating conversation.\nBest regards"));
});
