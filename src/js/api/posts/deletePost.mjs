import * as apiVar from "../../constant/variables.mjs";
import { fetchApi } from "../../constant/fetch.mjs";

// Re-declaring variables from import
const url = apiVar.baseURL;
const deletePost = apiVar.deletePost;

const fetchUrl = url + deletePost;

export function buttonListener() {
    
}

async function removePost() {
 try {
  const request = await fetchApi(fetchUrl + id, "get", localStorage.getItem("token"), null);
 } catch (error) {}
}
