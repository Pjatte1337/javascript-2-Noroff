import * as apiVar from "../../constant/variables.mjs";
import { fetchApi } from "../../constant/fetch.mjs";
import { message } from "../../constant/message.mjs";

let id = "";

// Re-declaring variables from import
const url = apiVar.baseURL;
const postDetails = apiVar.getPostsById + id;
const updatePostUrl = apiVar.deletePost + id;

export function updatePostListener(id) {
 document.querySelector(`button[id=updatePost-${id}]`).addEventListener("click", (e) => {
  displayAlert(id);
 });
}

async function displayAlert(postId) {
 const main = document.querySelector("#confirm-action");
 const displayContent = document.createElement("div");

 try {
  let request = await fetchApi(url + postDetails + postId, "GET", localStorage.getItem("token"), null);

  const { id, title, body, tag, media } = request;

  if (request) {
   let requestBody = {};

   request = await fetchApi(url + postDetails + postId, "GET", localStorage.getItem("token"), requestBody);
  }

  let requestBody = {
   title: `${title}`,
   body: `${body}`,
   tags: [`${tag}`],
  };

  console.log("Console logging requestBody", requestBody);
  console.log("Console logging request", request);

  displayContent.innerHTML = `
  <form action="" class="card bg-theme-bg-sec p-2 mb-5">
  <div class="container">
   <div class="mb-3">
    <label for="post_title" class="form-label">Title</label>
    <input type="text" class="form-control" id="post_title" placeholder="Title" value="${title}"/>
   </div>
   <div class="mb-3">
    <label class="form-label">New post</label>
    <textarea class="form-control" id="FormControlTextarea" rows="3">${body}</textarea>
   </div>
   <div class="mb-3">
    <label for="post_tags" class="form-label">Tags</label>
    <input type="text" class="form-control" id="post_tags" placeholder="Tags" value="${tag}"/>
   </div>
   <button type="submit" class="btn btn-theme-btn" name="update" value="yes">Update post</button>
  </div>
 </form>`;

  main.append(displayContent);

  console.log("this is the id to update", id);

  document.querySelector("button[value=yes]").addEventListener("click", (e) => {
   e.preventDefault();

   if (e) {
    const requestBody = {
     title: `${title}`,
     body: `${body}`,
     tags: [`${tag}`],
    };

    updatePost(id, requestBody);
   }
  });
 } catch (error) {
  console.log(error);
 }
}

async function updatePost(id, content) {
 const callUrl = url + updatePostUrl + id;
 const userToken = localStorage.getItem("token");

 try {
  const request = await fetchApi(callUrl, "PUT", userToken, content);
  console.log(content)
  console.log(request)
  debugger;
  return;
 } catch (error) {
  message("Error");
 }
}
