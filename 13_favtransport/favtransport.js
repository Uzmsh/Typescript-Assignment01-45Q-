//  an array with transportationModes examples 
var transportationModes = ["car", "bus~", "bicycle", "train", "plane"];
// Use forEach to print a series of statements about these transportation items
transportationModes.forEach(function (mode) {
    console.log("I would like to own a ".concat(mode, "."));
});
