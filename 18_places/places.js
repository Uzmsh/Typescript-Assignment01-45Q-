var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//  an array  containing places I'd like to visit
var locations = [
    "The Northern Lights", "Victoria Falls", "The Maldives", "Safari in Africa", "Great Barrier Reef"
];
// Print the array in its original order
console.log("Original order:", locations);
// Print the array in alphabetical order 
console.log("Alphabetical order:", __spreadArray([], locations, true).sort());
// Show that the array is still in its original order by printing it again
console.log("Original order:", locations);
// Print the array in reverse alphabetical order 
console.log("Reverse alphabetical order:", __spreadArray([], locations, true).sort().reverse());
// Show that the array is still in its original order by printing it again
console.log("Original order:", locations);
// Reverse the order of the list
locations.reverse();
// Print the array to show that its order has changed
console.log("Reversed order:", locations);
// Reverse the order of the list again to get back to the original order
locations.reverse();
// Print the list to show it’s back to its original order
console.log("Original order:", locations);
// Sort the array so it’s stored in alphabetical order
locations.sort();
// Print the array to show that its order has been changed
console.log("Sorted in alphabetical order:", locations);
