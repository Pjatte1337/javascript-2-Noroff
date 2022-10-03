import { fetchApi } from "../../constant/fetch.mjs";
import * as apiVar from "../../constant/variables.mjs";
import { LoopingCard } from "../../utils/classes/cardClass.mjs";
import { changeTimeFormat } from "../../constant/changeTime.mjs";

// Retrieving items from storage
const token = localStorage.getItem("token");

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPosts;

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const fetchUrl = url + endpointPosts;

// Function to retrieve user posts
export async function postFeed() {
 try {
  let request = await fetchApi(fetchUrl + params, "GET", token, null);
  console.log(request);
  request.forEach((e) => {
   const feedContainer = document.querySelector("#post-feed");

   const { id, title, created, body, author, updated, tag, media, avatar, comments, reactions, _count } = e;

   // Time formatting
   const formattedCreated = changeTimeFormat(created);
   const formattedUpdated = changeTimeFormat(updated);

   // Constants for DOM manipulations
   let userAvatar = "";
   let postTags = "";
   let postImage = "";
   let commentsHtml = "";
   let postSettings = "";

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

   const currentUser = localStorage.getItem("username");
   if (currentUser === author.name) {
    postSettings = `<span class="settings d-flex justify-content-end">
    <div class="dropdown">
    <a class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-gear"></i></a>
    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Update</a></li>
      <li><a class="dropdown-item" href="#">Delete</a></li>
    </ul>
  </div>`;
   }

   const card = new LoopingCard(
    "div",
    {
     id: `post-id-${id}`,
     class: "card",
    },
    `<div class="container m-0 p-0">
    <div class="card">
     <div class="card-header">
      <div class="d-flex flex-fill">
       <div class="d-flex flex-fill gap-2 align-items-center">
        ${userAvatar}
        <h4 class="text-muted"><a href="" class="muted-link text-muted">${author.name}</a></h4>
       </div>
       ${postSettings}
      </div>
     </div>
   
     <div class="card-body">
      <a href="../posts/index.html?id=${id}" class="h5 text-black text-decoration-none"><h5 class="card-title">${title}</h5></a>
      <p class="card-text">${body}.</p>
      ${postImage}
     </div>
     <div class="card-footer">
      <div class="row">
       <small class="text-muted">Published ${formattedUpdated}</small>
       <small class="text-muted">Last updated ${formattedUpdated}</small>
      </div>
      <div class="mt-2">
       <button class="btn" id="btn-comments"><i class="fa-regular fa-comment"></i> ${_count.comments}</button>
       <button class="btn" id="btn-like"><i class="fa-solid fa-thumbs-up"></i>  ${_count.reactions}</button>
      </div>
     </div>
    </div>
    <div>
     <div class="d-none" id="comments-${id}">
      <form action="" class="card p-2 mb-5">
       <div class="container">
        <div class="mb-3 gap-1">
         <textarea class="form-control"></textarea>
         <button class="btn float-end" type="submit">Comment</button>
        </div>
       </div>
      </form>
     </div>
     ${commentsHtml}
    </div>
   </div>
        `
   );

   feedContainer.append(card);
  });
 } catch (err) {
  console.log("There was a problem retrieving the user posts", err);
 }
}
