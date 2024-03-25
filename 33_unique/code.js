// List of current users
var current_users = ["Haris", "Ali", "Babar", "Jahan", "Maaz"];
// List of new users
var new_users = ["Ali", "Komail", "Maaz", "Sarah", "Talha"];
// Convert current usernames to lowercase for case-insensitive comparison
var current_users_lower = current_users.map(function (user) { return user.toLowerCase(); });
// Loop through new_users to check for uniqueness
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    // Convert new username to lowercase for case-insensitive comparison
    var new_user_lower = new_user.toLowerCase();
    // Flag to check if new username is unique
    var is_unique = true;
    // Check if new username exists in current_users (case-insensitive)
    for (var _a = 0, current_users_lower_1 = current_users_lower; _a < current_users_lower_1.length; _a++) {
        var user_lower = current_users_lower_1[_a];
        if (user_lower === new_user_lower) {
            is_unique = false;
            break;
        }
    }
    // Print appropriate message based on uniqueness
    if (is_unique) {
        console.log("Congratulations! ".concat(new_user, " is available."));
    }
    else {
        console.log("Sorry, ".concat(new_user, " is already taken. Please enter a new username."));
    }
}
