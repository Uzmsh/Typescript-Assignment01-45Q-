//function with parameters
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Creating albums using the make_album function
var album1 = make_album('Atif Aslam', 'Jal Pari');
var album2 = make_album('Ali Zafar', 'Huqa Pani', 12); // Specifying the number of tracks for this album
var album3 = make_album('Strings', 'Duur');
var album4 = make_album('Jal', 'Adat', 5);
// Printing the return values to show that albums are stored correctly
console.log(album1);
console.log(album2);
console.log(album3);
console.log(album4);
