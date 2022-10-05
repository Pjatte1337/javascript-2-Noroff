import * as apiVar from "../../constant/variables.mjs";
import { fetchApi } from "../../constant/fetch.mjs";
import { message } from "../../constant/message.mjs";

let id = "";

// Re-declaring variables from import
const url = apiVar.baseURL;
const postDetails = apiVar.getPostsById + id;
const deletePost = apiVar.deletePost + id;

export function deletePostListener(id) {
 document.querySelector(`button[id=deletePost-${id}]`).addEventListener("click", (e) => {
  displayAlert(id);
 });
}

async function displayAlert(postId) {
 try {
  const request = await fetchApi(url + postDetails + postId, "GET", localStorage.getItem("token"), null);
  const { title, date, id } = request;

  const main = document.querySelector("#confirm-action");

  const displayContent = document.createElement("div");
  displayContent.innerHTML = `<form class="">
            <h4>Delete post</h4>
            <p>Are you sure you want to delete the post with title - ${title}?</p>
            <button type="submit" class="btn btn-theme-bg-sec" name="confirm" value="yes">Yes</button>
            <button type="submit" class="btn btn-theme-bg-sec" name="confirm" value="no">no</button>
    </form>`;

  main.append(displayContent);

  console.log("this is the id to delete", id);

  document.querySelector("button[value=yes]").addEventListener("click", removePost(id));
 } catch (error) {
  console.log(error);
 }
}

async function removePost(id) {
 try {
  const request = await fetchApi(url + deletePost + id, "DELETE", localStorage.getItem("token"), null);
  const response = await request.json();
 } catch (error) {
  message("Error");
 }
}
