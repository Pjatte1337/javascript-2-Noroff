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
  console.log(request);
  request.forEach((e) => {
   const feedContainer = document.querySelector("#post-feed");

   const { id, title, created, body, author, updated, tag, media, image_user, comments, reactions } = e;

   // Time formatting
   const formattedCreated = changeTimeFormat(created);
   const formattedUpdated = changeTimeFormat(updated);

   // Constants for DOM manipulations
   let userAvatar = "";
   let postTags = "";
   let postImage = "";
   let commentsHtml = "";

   if (media) {
    postImage = `<a href="#openImageModal"><img src="${media}" class="img" alt="" loading="lazy"/></a>`;
   }

   if (comments) {
    const commentsTimeCreated = changeTimeFormat(comments.map((e) => e.created));

    commentsHtml = comments
     .map(
      (e) => `
      <div class="container" id="commentId-${e.id}">
        <div class="card-body">
            <p class="card-text">${e.body}</p>
        </div>
        <div class="card-footer">
            <small class="text-muted"> - ${e.owner}</small>
            <div class="row">
              <small class="text-muted">Published ${commentsTimeCreated}</small>
            </div>
      </div> 
    `
     )
     .join("");
   }

   if (author.avatar) {
    userAvatar = `<img src="${author.avatar}" class="img-thumbnail user-avatar-small" alt="" loading="lazy" />`;
   }

   const card = new LoopingCard(
    "div",
    {
     id: `post-id-${id}`,
     class: "card",
    },
    `<a href="" class="">
    <div class="container m-0 p-0">
        <div class="card">
         <div class="card-header">
         <div class="d-flex flex-fill">
         <div class="d-flex flex-fill gap-2 align-items-center">
          ${userAvatar}
         <h4 class="text-muted"><a href="" class="muted-link text-muted">${author.name}</a></h4>
         </div>
         <span class="settings d-flex justify-content-end">
         <i class="fa-solid fa-gear"></i>
         </span>
         </div>
         </div>

         <div class="card-body">
         <h5 class="card-title">${title}</h5>
           <p class="card-text">${body}.</p>
            ${postImage}
         </div>
         <div class="card-footer">
           <div class="row">
             <small class="text-muted">Published ${formattedUpdated}</small>
             <small class="text-muted">Last updated ${formattedUpdated}</small>
           </div>
         </div>
       </div>
       ${commentsHtml}
        </div>
        </a>`
   );

   feedContainer.append(card);
  });
 } catch (err) {
  console.log("There was a problem retrieving the user posts", err);
 }
}
