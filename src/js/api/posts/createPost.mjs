import * as apiVar from "../../constant/variables.mjs";
import { fetchApi } from "../../constant/fetch.mjs";

// Re-declaring variables from import
const url = apiVar.baseURL;
const createNew = apiVar.createNewPost;


const postUrl = url + createNew;


const createPost = document.querySelector("#createPost");

async function createPosts(postData) {
 try {
  if (postData) {
   let newPostData = {};

   if (post_image === "") {
        post_image = "string"
   }
   newPostData = postData;
   const request = await fetchApi(postUrl, "POST", localStorage.getItem("token"), newPostData);
   console.log(request);
  }

  //    window.location.reload();
 } catch (error) {
    console.log(error)
 }
}

export function createPostListener() {
 const form = document.querySelector("#createPost");
 const image = document.querySelector("#post_image");

 if (form) {
  form.addEventListener("submit", (event) => {
   event.preventDefault();

   const form = event.target;
   const formData = new FormData(form);
   const newData = Object.fromEntries(formData.entries());

   console.log("New form data", newData);
   // send it to API
   createPosts(newData);
  });
 }
}
