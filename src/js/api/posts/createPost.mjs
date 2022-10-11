import * as apiVar from "../../constant/variables.mjs";
import { fetchApi } from "../../constant/fetch.mjs";

// Re-declaring variables from import
const url = apiVar.baseURL;
const createNew = apiVar.createNewPost;

const postUrl = url + createNew;

const createPost = document.querySelector("#createPost");

async function createPosts(postData) {
 try {
  const request = await fetchApi(postUrl, "POST", localStorage.getItem("token"), postData);
  console.log(request);
  //    window.location.reload();
 } catch (error) {
  message("Error");
 }
}

export function createPostListener() {
 const form = document.querySelector("#createPost");

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
