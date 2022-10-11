import { fetchApi } from "../../constant/fetch.mjs";
import * as apiVar from "../../constant/variables.mjs";
// Retrieving items from storage
const token = localStorage.getItem("token");

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPosts;
const fetchUrl = url + endpointPosts;

export let posts = [];

async function postFeedMap() {
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
        count: e._count, // This is an array
        reactNum: e._count.reactions,
        commNum: e._count.comments,
        // Comments on post
        com: e.comments, // This is an array
        // Reaction to post
        react: e.reactions, // This is an array
        // Post Tags
        tag: e.tags, // This is an array
      };
    });
    return posts;
  } catch (err) {
    console.log("There was a problem retrieving the user posts", err);
  }
}
postFeedMap();
