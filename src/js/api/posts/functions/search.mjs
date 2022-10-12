import { retrievingPostData } from "../feed.mjs";
const searchInput = document.getElementById("postSearch");

const postArray = await retrievingPostData()

console.log(postArray)

export function userSearch() {
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const value = e.target.value.toLowerCase();
      postArray.forEach((post, index) => {
        const isVisible =
          post.title.toLowerCase().includes(value) ||
          post.authorName.toLowerCase().includes(value) ||
          post.body.toLowerCase().includes(value);
        document
          .querySelector("#post-feed")
          .children[index].classList.toggle("d-none", !isVisible);
      });
    });
  }
}
