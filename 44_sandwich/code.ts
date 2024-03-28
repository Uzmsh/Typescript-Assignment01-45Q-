function makeSandwich(...items: string[]): void {
    console.log("Making sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Sandwich is ready!");
}

// Call the function with different number of arguments
makeSandwich("cucumber", "Cheese", "Lettuce", "Tomato");
makeSandwich("Chicken", "Fish", "Avocado");
makeSandwich("Tuna Salad");
