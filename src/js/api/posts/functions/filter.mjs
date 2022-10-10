import { postFeedMap } from "../feed.mjs";

export async function filteringData() {
 const filtering = document.querySelector("#filterContainer");
 
 // Looking for the Filter container to avoid error if it is missing
 if (filtering) {
  // Filter options
  const dateFilter = document.querySelector("filterContainerDate");
  const likeFilter = document.querySelector("filterContainerLike");

  // Fetching the data
  const fetchData = await postFeedMap();
  const postData = fetchData;
  const newArray = [...postData];

  //   switch () {
  //    default:
  //     filteredData = newArray;
  //     break;

  //    case "date":
  //     filteringData = filteredData.sort((a, b) => new Date(a.created) - new Date(b.created));
  //     break;
  //   }
 }
}
