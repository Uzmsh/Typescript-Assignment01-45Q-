// List of current users
let current_users = ["Haris", "Ali", "Babar", "Jahan", "Maaz"];

// List of new users
let new_users = ["Ali", "Komail", "Maaz", "Sarah", "Talha"];

// Convert current usernames to lowercase for case-insensitive comparison
let current_users_lower = current_users.map(user => user.toLowerCase());

// Loop through new_users to check for uniqueness
for (let new_user of new_users) {
    // Convert new username to lowercase for case-insensitive comparison
    let new_user_lower = new_user.toLowerCase();
    
    // Flag to check if new username is unique
    let is_unique = true;

    // Check if new username exists in current_users (case-insensitive)
    for (let user_lower of current_users_lower) {
        if (user_lower === new_user_lower) {
            is_unique = false;
            break;
        }
    }

    // Print appropriate message based on uniqueness
    if (is_unique) {
        console.log(`Congratulations! ${new_user} is available.`);
    } else {
        console.log(`Sorry, ${new_user} is already taken. Please enter a new username.`);
    }
}
