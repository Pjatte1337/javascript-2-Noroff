// Importing function factory and variables
import * as factory from "../../../constant/factory.mjs";
import * as apiVar from "../../../api/_variables.mjs";
import { changeTimeFormat } from "../../../constant/changeTime.mjs";

const card = factory.createCards;
const tagList = factory.createParentElement
const tagItems = factory.createChildren;

// Retrieving items from storage
const token = localStorage.getItem("token");
const localEmail = localStorage.getItem("email");

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPosts;

// Function to retrieve user posts
export async function getUserPosts() {
 try {
  const request = await fetch(url + endpointPosts + `?_author=true&_comments=true&_reactions=true`, {
   method: "get",
   headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
   },
   body: JSON.stringify(),
  });
  const response = await request.json();

  // Making a if statement to check if response is there
  // If the response is not, the user will receive a pop up alert
  if (response) {
   const data = response;

   const dataFilter = data.filter(function (resp) {
    return resp.author.email == localEmail;
   });

   dataFilter.forEach((el) => {
    const feedContainer = document.querySelector("#post-feed");

    // setting date and time constant for changing format from api results
    const timeCreated = changeTimeFormat(el.created);
    const timeUpdated = changeTimeFormat(el.updated);

    // const tags = tagList("ul", "list-group list-group-horizontal", `post-${el.id}`, tagItems("li", "list-group-item", `tag-${el.id}`, `${el.tag}`))

    // Creating card content
    const displayCard = card("div", "card", `post-${el.id}`, `${el.author.avatar}`, `${el.title}`, `${el.author.name}`, `${timeCreated}`, `${el.body}`, `${el.media}`, "", `${timeUpdated}`);

    if(el.media){
        const imageMissing = document.querySelector("#postImage");
        imageMissing.classList.add("d-none")
    }


    // Appending content to new div
    feedContainer.append(displayCard);
   });

   console.log("This is the filtered response", dataFilter);
  } else {
   // Alerting the user if any problems
   alert("OBS! Some bugs have joined the party. Please try again");
   console.log("Something went wrong when loading post data");
  }
 } catch (err) {
  console.log("There was a problem retrieving the user posts", err);
 }
}
