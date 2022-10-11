import { fetchApi } from "../../../constant/fetch.mjs";
import * as apiVar from "../../../constant/variables.mjs";

// Retrieving items from storage
const token = localStorage.getItem("token");

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPosts;
const fetchUrl = url + endpointPosts;

const allButtons = document.querySelectorAll("[data-filter]");

let posts = [];

allButtons.forEach(function (btn) {
 btn.addEventListener("click", (e) => {
  const category = e.currentTarget.dataset.filter;
  const postCategory = posts.filter((i) => {
   if (i.category === category) {
    return i;
   }

   posts.forEach((post, index) => {
    const isVisible = post.category;
    document.querySelector("#post-feed").children[index].classList.toggle("d-none", !isVisible);
   });

   if (category === "all") {
   }
  });
 });
});

async function postFeed() {
 try {
  let request = await fetchApi(fetchUrl, "GET", token, null);
  posts = request.map((e) => {
   return {
    // Author related
    authorName: e.author.name,
    authorEmail: e.author.email,
    authorAvatar: e.author.avatar,
    // Post related
    title: e.title,
    body: e.body,
    postId: e.id,
    postImage: e.media,
    // Dates
    posted: e.created,
    updated: e.updated,
    // Numbers related to post
    _count: {
     comments: e.comments,
     reactions: e.reactions,
    },
    // Comments on post
    com: e.comments, // This is an array
    // Reaction to post
    react: e.reactions, // This is an array
    // Post Tags
    tag: e.tags, // This is an array
   };
  });
 } catch (err) {
  console.log("There was a problem retrieving the user posts", err);
 }
}
postFeed();
