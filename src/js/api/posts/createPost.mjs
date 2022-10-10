import { API_SOCIAL_URL } from "../../constant/variables.mjs";
import { authFetch } from "../auth/fetch.mjs";

const action = "/posts";
const method = "post";



export async function createPosts(postData) {
    const createPostURL = API_SOCIAL_URL + action;


    const response = await authFetch(createPostURL, {
        method,
        body: JSON.stringify(postData)
    })

    const post = await response.json();

    console.log(post)
}