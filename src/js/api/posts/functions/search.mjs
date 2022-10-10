import { fetchApi } from "../../../constant/fetch.mjs";
import * as apiVar from "../../../constant/variables.mjs";

// Retrieving items from storage
const token = localStorage.getItem("token");

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPosts;

const fetchUrl = url + endpointPosts;

// Selection HTML elements
const searchInput = document.getElementById("postSearch");

async function postFeed() {
 let request = await fetchApi(fetchUrl, "GET", token, null);
 const values = request;

}
