function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Calling the function with three city-country pairs and printing the returned value
console.log(city_country('Lahore', 'Pakistan'));
console.log(city_country('Paris', 'France'));
console.log(city_country('Tokyo', 'Japan'));