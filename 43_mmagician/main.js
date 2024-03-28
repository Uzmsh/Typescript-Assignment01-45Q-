var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Original array of magician's names
var magicians = ["Haris", "Dawood", "Junaid", "Tallal"];
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        great_magicians.push("the Great " + magician);
    }
    return great_magicians;
}
// Create a copy of the original array and store it in a new variable
var magicians_copy = __spreadArray([], magicians, true);
// Call make_great function with the copy of the array to modify magician names and store the result
var great_magicians = make_great(magicians_copy);
// Call show_magicians to show the original list
console.log("Original Magicians:");
show_magicians(magicians);
// Call show_magicians to show the modified list
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
