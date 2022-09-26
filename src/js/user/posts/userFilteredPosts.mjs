import * as apiVar from "../../constant/variables.mjs";

// Retrieving items from storage
const token = localStorage.getItem("token");
const localEmail = localStorage.getItem("email");

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPosts;

// Function to retrieve user posts
export async function getUserPosts() {
 try {
  const request = await fetch(url + endpointPosts + `?_author=true&_comments=true&_reactions=true`, {
   method: "get",
   headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
   },
   body: JSON.stringify(),
  });
  const response = await request.json();

  if (response) {
   const data = response;

   const dataFilter = data.filter(function (resp) {
    return resp.author.email == localEmail;
   });

   dataFilter.forEach((el) => {
    const feedContainer = document.querySelector("#post-feed");

    const postCard = document.createElement("div");

    postCard.innerHTML = `
       <div class="card">
       <div class="card-header">
       <h5 class="card-title">${el.title}</h5>
       <span class="settings">
       <i class="fa-solid fa-gear"></i>
       </span>
       </div>
       <div class="card-body">
         <p class="card-text">${el.body}.</p>
       </div>
       <div class="card-footer">
         <small class="text-muted"> - ${el.author.name}</small>
         <small class="text-muted">Last updated ${el.created}</small>
       </div>
     </div>
       
       `;
    feedContainer.append(postCard);
   });

   console.log("This is the filtered response", dataFilter);
  }
 } catch (err) {
  console.log("There was a problem retrieving the user posts", err);
 }
}