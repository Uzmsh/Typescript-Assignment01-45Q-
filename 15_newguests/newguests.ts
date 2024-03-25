//  an array with guestList containing people invited to dinner
const guestList = ["Aishay Noor", "Umm-e-Habiba", "Fasiha Zaib"];

const notcomming =guestList[1];

console.log(notcomming, "is not comming");

//replace with new guest 
guestList.splice(1, 1, "Fatima");



// Use forEach to print a message inviting each person to dinner
guestList.forEach(eachperson => {
    console.log(`Dear ${eachperson},\nYou are cordially invited to dinner at my place.
     Please join us for an evening of good food and stimulating conversation.
     \nBest regards,\n[Uzma Shahzad]`);
});