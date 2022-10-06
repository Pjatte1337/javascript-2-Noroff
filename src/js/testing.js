import { fetchApi } from "../../constant/fetch.mjs";
import * as cardContent from "../../utils/cardContent.mjs"
import * as apiVar from "../../constant/variables.mjs";
import { LoopingCard } from "../../utils/classes/cardClass.mjs";

import { changeTimeFormat } from "../../constant/changeTime.mjs";

// Retrieving items from storage
const token = localStorage.getItem("token");
const localEmail = localStorage.getItem("email");
const userName = localStorage.getItem("username");

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPosts;
const cardDetails = JSON.stringify(cardContent);

// Function to retrieve user posts
export async function getUserPosts() {
 try {
  const request = await fetchApi(url + endpointPosts, "GET", token, null);

  if (request) {
   const data = request;
   const dataFilter = data.filter(function (resp) {
    return resp.author.email === localEmail;
   });

   dataFilter.forEach((e) => {
    const feedContainer = document.querySelector("#post-feed");

    const { id, title, created, body, author, updated, tag, media, comments, reactions } = e;

    const formattedCreated = changeTimeFormat(created);
    const formattedUpdated = changeTimeFormat(updated);


    const card = new LoopingCard(JSON.parse(cardDetails));

    feedContainer.append(card);
   });

   console.log("This is the filtered response", dataFilter);
   //  console.log("This is the unfiltered response", response);
  }
 } catch (err) {
  console.log("There was a problem retrieving the user posts", err);
 }
} 