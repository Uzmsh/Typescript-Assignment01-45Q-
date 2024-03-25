//  an array  containing places I'd like to visit
let locations: string[] = [
    "The Northern Lights","Victoria Falls", "The Maldives", "Safari in Africa", "Great Barrier Reef"];

// Print the array in its original order
console.log("Original order:", locations);

// Print the array in alphabetical order 
console.log("Alphabetical order:", [...locations].sort());

// Show that the array is still in its original order by printing it again
console.log("Original order:", locations);

// Print the array in reverse alphabetical order 
console.log("Reverse alphabetical order:", [...locations].sort().reverse());

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
