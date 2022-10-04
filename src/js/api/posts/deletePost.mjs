import * as apiVar from "../../constant/variables.mjs";
import { fetchApi } from "../../constant/fetch.mjs";

// Re-declaring variables from import
const url = apiVar.baseURL;
const deletePost = apiVar.deletePost;

const fetchUrl = url + deletePost;

export function buttonListener() {
 const button = document.querySelectorAll(".change-post"); // -id-${id}

 button.forEach((e) => {
  e.addEventListener("click", (buttonId) => {
   buttonId = document.querySelectorAll(".change-post");

   const nodeArray = [].slice.call(buttonId);

   for (let i = 0; i < nodeArray.length; i++) {
    const buttonId = JSON.stringify(nodeArray[i].id).split("-")
    const id = buttonId[1].replace(/\D/g,'')
    
    console.log(id)
   }
  });
 });
}

async function removePost() {
 try {
  const request = await fetchApi(fetchUrl + id, "get", localStorage.getItem("token"), null);
 } catch (error) {}
}
