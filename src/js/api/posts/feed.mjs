import { fetchApi } from "../../constant/fetch.mjs";
import * as apiVar from "../../constant/variables.mjs";
// Retrieving items from storage
const token = localStorage.getItem("token");

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPosts;
const fetchUrl = url + endpointPosts;

let posts = [];

export async function postFeedMap() {
    try {
     let request = await fetchApi(fetchUrl, "GET", token, null);
     posts = request.map((e) => {
      return { 
        title: e.title, 
        body: e.body, 
        author: e.author.name, 
        postId: e.id 
    };
     });
    } catch (err) {
     console.log("There was a problem retrieving the user posts", err);
    }
   }