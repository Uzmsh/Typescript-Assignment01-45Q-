//  an array with guestList containing people invited to dinner
const guestList: string[] = ["Aishay Noor", "Umm-e-Habiba", "Fasiha Zaib"];

// Use forEach to print a message inviting each person to dinner
guestList.forEach(eachperson => {
    console.log(`Dear ${eachperson},\nYou are cordially invited to dinner at my place.
     Please join us for an evening of good food and stimulating conversation.
     \nBest regards,\n[Uzma Shahzad]`);
});