// // Importing all modules
import * as user from "./user/index.mjs";
import { logOut } from "./user/login/logout.mjs";
import { displayProfile } from "./user/profile/profile.mjs";

// // Creating variables to use in the if statement under
const logOutButton = document.querySelector("#logout");

const index = document.getElementById("index");
const profile = document.getElementById("profile");

// // Executing sign in function if the location is based on the log in location
if (index) {
    user.formEvent()
}

// Executing the the function for the profile page layout
if (profile) {
 displayProfile();
}

//Executing logout function if the logout button is present
if (logOutButton) {
 logOut();
}
