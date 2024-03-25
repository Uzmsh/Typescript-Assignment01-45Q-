
//function with parameters
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album: { artist: string, title: string, tracks?: number } = { artist, title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Creating albums using the make_album function
let album1 = make_album('Atif Aslam', 'Jal Pari');
let album2 = make_album('Ali Zafar', 'Huqa Pani', 12); // Specifying the number of tracks for this album
let album3 = make_album('Strings', 'Duur');
let album4 = make_album('Jal', 'Adat',5);

// Printing the return values to show that albums are stored correctly
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);