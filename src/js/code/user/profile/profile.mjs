// Importing function factory
import * as factory from "../../constant/factory.mjs";
const element = factory.createElement;

// Creating function to display user profile
export function displayProfile(response) {
 if (response) {
  const profileInfo = document.querySelector("#profile-info");

  // Creating profile card with factory function
  const newCard = element("div", "profile-card", "profile-card");

  // Creating card content
  newCard.innerHTML = `
          <div class="card h-100">
             <img src="${response.avatar}" class="card-img-top image" alt="User profile image">
             <div class="card-body">
               <h5 class="card-title">${response.name}</h5>
               <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
             </div>
           </div>`;

  // Appending content to new div
  profileInfo.append(newCard);
 } else {
  // Alerting the user if any problems
  alert("OBS! Some bugs have joined the party. Please try again");
  console.log("Something went wrong when loading profile data");
 }
}
