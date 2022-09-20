import * as apiVar from "../api/_variables.mjs";

// Declaring variables
const loginForm = document.querySelector("form#login");
const regForm = document.querySelector("form#reg");

const email = document.getElementById("email");
const pw = document.getElementById("pw");
const userName = document.getElementById("user_name");

// Re-declaring variables from import
const url = apiVar.baseURL;
const login = apiVar.login;
const register = apiVar.register;
const optPost = apiVar.optionPost;

// Event listener for form
regForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const userName = form.user_name.value;
    const password = form.pw.value;
  })


// Register user function
async function newUser(){
    try {
        
    } catch (err) {
        console.log("Obs! Something went wrong with register function", err)
    }
}