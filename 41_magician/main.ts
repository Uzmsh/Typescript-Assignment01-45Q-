
// Array of magician's names
let magicians: string[] = [""Haris", "Dawood", "Junaid", "Tallal"];


//function with parameters
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Calling the  function
show_magicians(magicians);

//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
//which prints the name of each magician in the array.
