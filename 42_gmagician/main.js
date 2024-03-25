// Array of magician's names
var magicians = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
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
// Call make_great function to modify magician names and store the result
var great_magicians = make_great(magicians);
// Call show_magicians to see the original list
console.log("Original Magicians:");
show_magicians(magicians);
// Call show_magicians to see the modified list
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
