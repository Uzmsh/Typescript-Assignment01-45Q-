//  an array with guestList containing people invited to dinner
var guestList = ["Aishay Noor", "Umm-e-Habiba", "Fasiha Zaib"];
var notcomming = guestList[1];
console.log(notcomming, "is not comming");
//replace with new guest 
guestList.splice(1, 1, "Fatima"), "";
// Use forEach to print a message inviting each person to dinner
guestList.forEach(function (eachperson) {
    console.log("Dear ".concat(eachperson, ",\nYou are cordially invited to dinner at my place.\n     Please join us for an evening of good food and stimulating conversation.\n     \nBest regards,\n[Uzma Shahzad]"));
});
