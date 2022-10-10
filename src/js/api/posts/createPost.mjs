/* import * as apiVar from "../../constant/variables.mjs";
import { fetchApi } from "../../constant/fetch.mjs";

// Re-declaring variables from import
const url = apiVar.baseURL;
const createNew = apiVar.createNewPost;

const createPost = document.querySelector("#createPost");

export async function createPosts(postData) {
 if (!createPost) {
  const request = await fetchApi(url + createNew, "POST", localStorage.getItem("token"), null);
  const post = await request.json();

  console.log(post);
 }
}
*/


