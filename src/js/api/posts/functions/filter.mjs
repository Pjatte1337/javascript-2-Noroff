import { posts } from "../feed.mjs";

export function filterButtonListener() {
  const allButtons = document.querySelectorAll("[data-filter]");
  allButtons.forEach(function (btn) {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.filter;
      filteringData(category);
    });
  });
}

async function filteringData(value) {
  // Fetching the data
  let newArray = [...posts];
  let items = document.querySelectorAll("[data-id]");
  let sortedArray = "";

  switch (value) {
    default:
      break;

    case "all":
      sortedArray = newArray;
      break;

    case "date":
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
  if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
  return 1;
}

function sortByZtoA(a, b) {
  if (a.title.toLowerCase() < b.title.toLowerCase()) return 1;
  return -1;
}
