import { fetchApi } from "../../../constant/fetch.mjs";
import * as apiVar from "../../../constant/variables.mjs";
// Retrieving items from storage
const token = localStorage.getItem("token");

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPosts;
const fetchUrl = url + endpointPosts;

const searchInput = document.querySelector("[data-search]");

let posts = [];

searchInput.addEventListener("input", (e) => {
 const value = e.target.value.toLowerCase();
 posts.forEach((post) => {
  const isVisible = post.title.includes(value) || post.author.includes(value);
  document.querySelector("#post-feed").children[0].classList.toggle("d-none", !isVisible);
 });
});

async function postFeed() {
 try {
  let request = await fetchApi(fetchUrl, "GET", token, null);
  posts = request.map((e) => {
   return { title: e.title, body: e.body, author: e.author.name, postId: e.id };
  });
 } catch (err) {
  console.log("There was a problem retrieving the user posts", err);
 }
}
postFeed();
