

// Array of magician's names
let magicians: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

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


// Call make_great function to modify magician names and store the result
let great_magicians: string[] = make_great(magicians);

// Call show_magicians to see the original list
console.log("Original Magicians:");
show_magicians(magicians);

// Call show_magicians to see the modified list
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
