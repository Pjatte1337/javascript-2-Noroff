import { postFeedMap, posts } from "../feed.mjs";
import { createPostFeed } from "../postFeed.mjs";

export function filterButtonListener() {
  const allButtons = document.querySelectorAll("[data-filter]");
  allButtons.forEach(function (btn) {
    btn.addEventListener("click", async (e) => {
      const value = e.currentTarget.dataset.filter;
      const filteredData = filteringData(value);
      const newData = filteredData;
      console.log(filteredData);
      const postFeed = document.getElementById("post-feed");
      // postFeed.innerHTML = "";
      // const newFeed = await createPostFeed(newData);
      // postFeed.append(newFeed);
    });
  });
}

function filteringData(value) {
  // Fetching the data
  let newArray = [...posts];
  let sortedArray = "";

  switch (value) {
    default:
      break;

    case "all":
      sortedArray = newArray;
      break;

    case "sort_date":
      sortedArray = newArray.sort(sortByDate);
      break;

    case "A_zSort":
      sortedArray = newArray.sort(sortByAtoZ);
      break;

    case "Z_aSort":
      sortedArray = newArray.sort(sortByZtoA);
      break;
  }
}

function sortByDate(a, b) {
  return new Date(a.posted) - new Date(b.posted);
}

function sortByAtoZ(a, b) {
  return a.title < b.title;
}

function sortByZtoA(a, b) {
  return a.title > b.title;
}
