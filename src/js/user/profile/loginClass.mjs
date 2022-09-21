import * as fetchCall from "../profile/loginCall.mjs";

// Declaring variables
const loginForm = document.querySelector("#login");
const fetch = fetchCall.signIn;

// sign in class
class SignIn {
 constructor(loginForm, input) {
  this.form = loginForm;
  this.input = input;
  this.validateSubmit();
 }

 validateSubmit() {
  let self = this;

  this.form.addEventListener("submit", (e) => {
   e.preventDefault();
   let error = 0;
   const email = document.querySelector("#email").value;
   const pw = document.querySelector("#pw").value;

    if(error == 0){
        fetch(email, pw);
    }
    
  });
 }

 validateInput(field) {
  if (field.value.trim() == "") {
   this.setStatus(field, `${field.previousElementSibling.innerText} cant be blank`, "error");
   return false;
  } else {
   // If password is to short, display this
   if (field.type == "pw") {
    if (field.value.length < 4) {
     this.setStatus(field, `${field.previousElementSibling.innerText} must be wrong`, "error");
     return false;
    } else {
     // If password is ok, display this
     this.setStatus(field, null, "success");
     return true;
    }
   } else {
    // If fields are not empty, and password is ok, display this
    this.setStatus(field, null, "success");
    return true;
   }
  }
 }

 // Setting status for form fields
 setStatus(field, message, status) {
  const errorMessage = field.parentElement.querySelector(".invalid-feedback");

  // Setting up success for fields
  if ((status = "success")) {
   if (errorMessage) {
    errorMessage.innerText = "";
   }
   field.classList.add("success");
   field.classList.remove("warning");
  }

  // Setting up error for fields
  if ((status = "error")) {
   errorMessage.innerText = message;
   field.classList.add("warning");
  }
 }
}

if (loginForm) {
 const input = ["email", "pw"];
 const validate = new SignIn(loginForm, input);
}
