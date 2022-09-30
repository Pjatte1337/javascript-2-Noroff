import { fetchApi } from "../../constant/fetch.mjs";
import * as apiVar from "../../constant/variables.mjs";
import { LoopingCard } from "../../utils/classes/cardClass.mjs";

import { changeTimeFormat } from "../../constant/changeTime.mjs";

// Retrieving items from storage
const token = localStorage.getItem("token");
const localEmail = localStorage.getItem("email");
const userName = localStorage.getItem("username");

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
    return resp.author.email === localEmail;
   });

   dataFilter.forEach((e) => {
    const feedContainer = document.querySelector("#post-feed");

    const { id, title, created, body, author, updated, tag, media, comments, reactions } = e;

    const formattedCreated = changeTimeFormat(created);
    const formattedUpdated = changeTimeFormat(updated);

    // Constants for DOM manipulations
    let userAvatar = "";
    let postTags = "";
    let postImage = "";
    let commentsHtml = "";

    if (media) {
     postImage = `<a href="#openImageModal"><img src="${media}" class="small-image" alt="" loading="lazy"/></a>`;
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
     `
     <a href="" class="">
    <div class="container m-0 p-0">
        <div class="card">
         <div class="card-header">
         <div class="d-flex flex-fill">
         <div class="d-flex flex-fill gap-2 align-items-center">
          ${userAvatar}
         <h4 class="text-muted"><a href="" class="muted-link text-muted">${author.name}</a></h4>
         </div>
         <span class="settings d-flex justify-content-end">
         <div class="dropdown">
         <a class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-gear"></i></a>
         <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
           <li><a class="dropdown-item" href="#">test</a></li>
           <li><a class="dropdown-item" href="#">test</a></li>
           <li><a class="dropdown-item" href="#">test</a></li>
         </ul>
       </div>
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

   console.log("This is the filtered response", dataFilter);
   //  console.log("This is the unfiltered response", response);
  }
 } catch (err) {
  console.log("There was a problem retrieving the user posts", err);
 }
}
