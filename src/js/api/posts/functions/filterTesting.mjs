import { postFeedMap } from "../feed.mjs";

function listener(name, sort) {
 const btn = document.getElementById(`${name}`);
 function addListener() {
  filteringData(sort);
 }
 btn.addEventListener("click", addListener);
}

// const dateFilter = listener("date", "date");
// const likeLowFilter = listener("likeLow", "likeLow");
// const likeHeighFilter = listener("likeHigh", "likeHigh");

export async function filteringData(value) {
 const filtering = document.querySelector("#filterContainer");

 // Looking for the Filter container to avoid error if it is missing
 if (filtering) {
  // Fetching the data
  const fetchData = await postFeedMap();
  const postData = fetchData;
  const newArray = [...postData];

  let filteredData = [];

  switch (value) {
   default:
    filteredData = newArray;
    break;

   case "date":
    filteringData = filteredData.sort((a, b) => new Date(a.created) - new Date(b.created));
    break;

   case "likeHigh":
    filteringData = filteredData.sort((a, b) => a - b);
    break;

   case "likeLow":
    filteringData = filteredData.sort((a, b) => a - b);
    break;
  }
 }
}
