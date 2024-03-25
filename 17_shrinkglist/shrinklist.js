//  an array containing guests
var guestList = ["Aishay Noor", "Umm-e-Habiba", "Fasiha Zaib"];
//guest not comming
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
// Print a message with only two people can be invited
console.log("Due to space constraints, we can only invite two people for dinner.\n");
// Remove guests from the list one at a time until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop(); // Remove the last guest from the list
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print a message to each of the two people they're still invited
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ", you're still invited to dinner."));
});
// Remove the last two names from the list
guestList = [];
// Print the empty list to verify
console.log("\nEmpty List:", guestList);
