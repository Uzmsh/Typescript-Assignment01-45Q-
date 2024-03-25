function createCar(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName
    };
    // Add additional options to the car Object
    options.forEach(function (option) {
        var key = Object.keys(option)[0]; // Get the key of the option
        car[key] = option[key]; // Add the option to the car Object
    });
    return car;
}
// Call the function with required information and additional options
var myCar = createCar("Toyota", "Camry", { color: "blue" }, { year: 2022 });
// Print the Object returned by the function
console.log(myCar);
