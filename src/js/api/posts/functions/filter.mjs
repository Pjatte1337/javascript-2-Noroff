import { postFeedMap } from "../feed.mjs";

// Selecting HTML elements
const dateRadio = document.getElementById("oldNew");
const likeLowRadio = document.getElementById("lowHigh");
const likeHighRadio = document.getElementById("highLow");

export function test() {
 dateRadio.addEventListener("click", () => {
  postData.sort(dateCompare);
 });
}

async function dateCompare(a, b) {
    const postData = await postFeedMap();

    const likes = postData._count.reactions;
    console.log(likes)
}

async function testFetch(){
    const postData = await postFeedMap();

    const likes = postData.map(e => e.reactNum)
    likes.sort((a,b) => b - a)
    console.log(likes)
}
testFetch()
