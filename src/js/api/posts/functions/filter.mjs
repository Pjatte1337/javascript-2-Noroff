import { postFeedMap } from "../feed.mjs";

const posts = postFeedMap();

// Selecting HTML elements
const dateRadio = document.getElementById("oldNew");
const likeLowRadio = document.getElementById("lowHigh");
const likeHighRadio = document.getElementById("highLow");


export function test(){
    console.log(posts)
}
