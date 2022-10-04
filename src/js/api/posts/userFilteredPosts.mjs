import { fetchApi } from "../../constant/fetch.mjs";
import * as apiVar from "../../constant/variables.mjs";
import { LoopingCard } from "../../utils/classes/cardClass.mjs";
import { changeTimeFormat } from "../../constant/changeTime.mjs";
import { buttonListener } from "./deletePost.mjs";


// Retrieving items from storage
const token = localStorage.getItem("token");
const localEmail = localStorage.getItem("email");
const userName = localStorage.getItem("username");

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPosts;
const fetchUrl = url + endpointPosts;

// Function to retrieve user posts
export async function getUserPosts() {
 try {
  const request = await fetchApi(fetchUrl, "GET", token, null);

  if (request) {
   const data = request;
   const dataFilter = data.filter(function (resp) {
    return resp.author.email === localEmail;
   });

   dataFilter.forEach((e) => {
    const feedContainer = document.querySelector("#post-feed");

    const { id, title, created, body, author, updated, tag, media, comments, reactions, _count } = e;

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

    if (userName === author.name) {
     postSettings = `<span class="settings d-flex justify-content-end">
      <div class="dropdown">
      <a class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-gear"></i></a>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
      <li id="updatePost-${id}">
      <button class="dropdown-item" id="${id}">Update</button>
      </li>
      <li id="deletePost-${id}">
      <button class="dropdown-item" id="${id}">Delete</button>
      </li>
      </ul>
    </div>`;
    }


    const card = new LoopingCard(
     "div",
     {
      id: `post-id-${id}`,
      class: "card container-fluid d-flex justify-content-center p-0 m-0",
     },
     `<div class="card-header">
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
         ${commentsHtml}
        </div>
       </div>
          `
    );

    feedContainer.append(card);
   });


  //  console.log("This is the filtered response", dataFilter);
   //  console.log("This is the unfiltered response", response);
  }
 } catch (err) {
  console.log("There was a problem retrieving the user posts", err);
 }
}
