import { fetchApi } from "../../constant/fetch.mjs";
import * as apiVar from "../../constant/variables.mjs";
import { LoopingCard } from "../../utils/classes/cardClass.mjs";

import { changeTimeFormat } from "../../constant/changeTime.mjs";

// Retrieving items from storage
const token = localStorage.getItem("token");

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPosts;

// Function to retrieve user posts
export async function postFeed() {
 try {
  const request = await fetchApi(url + endpointPosts, "GET", token, null);

  request.forEach((e) => {
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
     `<div class="">
     <div class="card">
      <div class="card-header">
      <h5 class="card-title">${title}</h5>
      <span class="settings d-flex justify-content-end">
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
     </div>`
    );

    feedContainer.append(card);
   });
 } catch (err) {
  console.log("There was a problem retrieving the user posts", err);
 }
}
