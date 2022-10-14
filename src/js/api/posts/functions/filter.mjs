import { createPostFeed } from "../postFeed.mjs";
import { retrievingPostData } from "../feed.mjs";

const postArray = await retrievingPostData();

export function filterButtonListener() {
  const allButtons = document.querySelectorAll("[data-filter]");
  allButtons.forEach(function (btn) {
    btn.addEventListener("click", async (e) => {
      const value = e.currentTarget.dataset.filter;
      const filteredData = filteringData(value);
      console.log(filteredData);
      const postFeed = document.getElementById("post-feed");
      postFeed.innerHTML = "";
      const newFeed = createPostFeed(filteredData);
      postFeed.append(newFeed);
    });
  });
}

function filteringData(value) {
  // Fetching the data
  const defaultArray = postArray;
  let sortedArray = [];

  switch (value) {
    default:
      defaultArray;
      break;

    case "sort_date":
      sortedArray = postArray.sort(sortByDate);
      break;

    case "A_zSort":
      sortedArray = postArray.sort(sortByAtoZ);
      break;

    case "Z_aSort":
      sortedArray = postArray.sort(sortByZtoA);
      break;

    case "all":
      defaultArray;
      break;
  }

  return sortedArray, defaultArray;
}

function sortByDate(a, b) {
  return new Date(a.posted) < new Date(b.posted);
}

function sortByAtoZ(a, b) {
  return a.authorName > b.authorName;
}

function sortByZtoA(a, b) {
  return a.authorName < b.authorName;
}
