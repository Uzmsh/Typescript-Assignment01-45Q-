function createCar(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]):
     { [key: string]: any } {
    let car: { [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName
    };

    // Add additional options to the car Object
    options.forEach(option => {
        let key = Object.keys(option)[0]; // Get the key of the option
        car[key] = option[key]; // Add the option to the car Object
    });

    return car;
}

// Call the function with required information and additional options
let myCar = createCar("Toyota", "Camry", { color: "blue" }, { year: 2022 });

// Print the Object returned by the function
console.log(myCar);

