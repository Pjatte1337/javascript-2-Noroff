import { posts } from "../feed.mjs";

export function filterButtonListener() {
 const allButtons = document.querySelectorAll("[data-filter]");
 allButtons.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
   const category = e.currentTarget.dataset.filter;
   // btn.classList.add("btn-theme-secondary")
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
  //  console.log("ok all");
  //  console.log("New array all", newArray);
   break;

  case "date":
   sortedArray = newArray.sort(sortByDate);
  //  console.log("ok date");
  //  console.log("New array date", newArray);
   break;

  case "A_zSort":
   sortedArray = newArray.sort(sortByAtoZ);
  //  console.log("ok a-z");
  //  console.log("New array A_zSort", newArray);
   break;

  case "Z_aSort":
   sortedArray = newArray.sort(sortByZtoA);
  //  console.log("ok z-a");
  //  console.log("New array Z_aSort", newArray);
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
