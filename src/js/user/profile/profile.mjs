// Importing function factory
import * as apiVar from "../../constant/variables.mjs";
import { fetchApi } from "../../constant/fetch.mjs";
import { LoopingCard } from "../../utils/classes/cardClass.mjs";
import { getUserPosts } from "../posts/userFilteredPosts.mjs";
import { message } from "../../constant/message.mjs";

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPosts;

// Creating function to display user profile
export async function displayProfile() {
 const token = localStorage.getItem("token");

 const authUser = await fetchApi(url + endpointPosts, "GET", token, null);
 getUserPosts(authUser);
}

async function displayUserInformation() {
 try {
  const userInfo = await fetchApi(url + apiVar.getProfile + localStorage.getItem("username"), "GET", localStorage.getItem("token"), null);
  console.log(userInfo);

  const { name, avatar, banner, _count } = userInfo;

  const userInfoContainer = document.getElementById("userInfo");

  const profileCard = new LoopingCard(
   "div",
   {
    id: `profileCard`,
    class: "card",
   },
   `<div class="card">
            <div class="card-body">
            <img src="${avatar}" />
             <h4 class="card-title">${name}</h4>
             <img src="${banner}" />
             <div class="">
             <ul>
             <li>Posts: ${_count.posts}</li>
             <li>Followers: ${_count.followers}</li>
             <li>Following: ${_count.following}</li>
             </ul>
             </div>
            </div>
            </div>`
  );

  userInfoContainer.append(profileCard);
 } catch (error) {
  console.log(error);
 }
}
displayUserInformation();

//    if (response) {
//   const profileInfo = document.querySelector("#profile-info");

//   // Creating profile card with factory function
//   const newCard = element("div", "profile-card", "profile-card");

//   // Creating card content
//   newCard.innerHTML = `
//           <div class="card h-100">
//              <img src="${response.avatar}" class="card-img-top image" alt="User profile image">
//              <div class="card-body">
//                <h5 class="card-title">${response.name}</h5>
//                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
//              </div>
//            </div>`;

//   // Appending content to new div
//   profileInfo.append(newCard);
//  } else {
//   // Alerting the user if any problems
//   alert("OBS! Some bugs have joined the party. Please try again");
//   console.log("Something went wrong when loading profile data");
//  }
