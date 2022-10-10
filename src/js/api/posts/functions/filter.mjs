import { postFeedMap } from "../feed.mjs";

const filtering = document.querySelector("#filterContainer");

export async function filteringData() {
 if (!filtering) {
  console.log(filtering.childNodes);
  const fetchData = await postFeedMap();
  const postData = fetchData;
  const newArray = [...postData];

  switch (selectedOption) {
   default:
    filteredData = newArray;
    break;

   case "date":
    filteringData = filteredData.sort((a, b) => new Date(a.created) - new Date(b.created));
    break;
  }
 }
}
