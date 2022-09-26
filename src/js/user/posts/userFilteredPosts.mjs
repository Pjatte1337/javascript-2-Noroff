import { fetchApi } from "../../constant/fetch.mjs";
import * as apiVar from "../../constant/variables.mjs";
import { LoopingCard } from "../../utils/classes/cardClass.mjs";

import { changeTimeFormat } from "../../constant/changeTime.mjs";

// Retrieving items from storage
const token = localStorage.getItem("token");
const localEmail = localStorage.getItem("email");

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPosts;

// Function to retrieve user posts
export async function getUserPosts() {
 try {
  const request = await fetchApi(url + endpointPosts, "GET", token, null);

  if (request) {
   const data = request;
   const dataFilter = data.filter(function (resp) {
    return resp.author.email == localEmail;
   });

   dataFilter.forEach((e) => {
    const feedContainer = document.querySelector("#post-feed");

    const { id, title, created, body, author, updated, tag, image, image_user } = e;

    const formattedCreated = changeTimeFormat(created)
    const formattedUpdated = changeTimeFormat(updated)

    const card = new LoopingCard(
     "div",
     {
      id: `post-id-${id}`,
      class: "card",
     },
     `<div class="card">
      <div class="card-header">
      <h5 class="card-title">${title}</h5>
      <span class="settings">
      <i class="fa-solid fa-gear"></i>
      </span>
      </div>
      <div class="card-body">
        <p class="card-text">${body}.</p>
      </div>
      <div class="card-footer">
        <small class="text-muted"> - ${author.name}</small>
        <div class="row">
          <small class="text-muted">Published ${formattedUpdated}</small>
          <small class="text-muted">Last updated ${formattedUpdated}</small>
        </div>
      </div>
    </div>
      
      
      `
    );

    feedContainer.append(card);
   });

   console.log("This is the filtered response", dataFilter);
  }
 } catch (err) {
  console.log("There was a problem retrieving the user posts", err);
 }
}
