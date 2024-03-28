
//function with let and for
//array 
let magicians: string[] = ["Haris", "Dawood", "Junaid", "Tallal"];


function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push("the Great " + magician);
    }
    return great_magicians;
}

// Create a copy of the original array and store it in a new variable
let magicians_copy: string[] = [...magicians];

// Call make_great function with the copy of the array to modify magician names and store the result
let great_magicians: string[] = make_great(magicians_copy);

// Call show_magicians to show the original list
console.log("Original Magicians:");
show_magicians(magicians);

// Call show_magicians to show the modified list
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
