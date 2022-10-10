import { postFeedMap } from "../feed.mjs";

// Selecting HTML elements
const dateRadio = document.getElementById("oldNew");
const likeLowRadio = document.getElementById("lowHigh");
const likeHighRadio = document.getElementById("highLow");

async function dateCompare(a, b) {
 const postData = await postFeedMap();
 const created = postData.posted;
 // return a.created - b.created
}

export async function test() {
 const postData = await postFeedMap();

 dateRadio.addEventListener("click", () => {
  postData.sort();
 });
}

// DO NOT USE THIS!!!

// export async function test() {
//     const postData = await postFeedMap();

//     const posted = postData.map((e) => e.posted);
//     const updated = postData.map((e) => e.updated);
//     console.log("Posted date", posted);
//     console.log("updated date", updated);

//     dateRadio.addEventListener("click", () => {
//      postData.sort(dateCompare);
//     });
//    }

//    async function dateCompare(a, b) {
//     const postData = await postFeedMap();

//     const posted = postData.map((e) => e.posted);
//     const updated = postData.map((e) => e.updated);
//     return a.posted - b.updated;
//    }
