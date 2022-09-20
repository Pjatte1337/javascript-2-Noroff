import * as apiVar from "../../api/_variables.mjs"
import { displayProfile } from "./profile.mjs";
import { getUserPosts } from "./post/usersPost.mjs";

// Retrieving items from storage
const token = localStorage.getItem("token");
const name = localStorage.getItem("username");

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointProfile = apiVar.profile;

// Function to retrieve user data
async function getUserData() {
 try {
  const request = await fetch(url + endpointProfile + `${name}`, {
   method: "get",
   headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
   },
   body: JSON.stringify(),
  });
  const response = await request.json();

  if (response) {
    displayProfile(response)
    getUserPosts()
  }

  console.log("This is the response from the fetch call", response);
 } catch (err) {
  console.log("There was a problem retrieving the user data", err);
 }
}

getUserData();


