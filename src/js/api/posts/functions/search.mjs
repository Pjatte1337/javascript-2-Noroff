let posts = JSON.parse(localStorage.getItem("ApiPosts"));

const searchInput = document.querySelector("[data-search]");

export function userSearch() {
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const value = e.target.value.toLowerCase();
      posts.forEach((post, index) => {
        const isVisible =
          post.title.toLowerCase().includes(value) ||
          post.authorName.toLowerCase().includes(value) ||
          post.title.toLowerCase().includes(value);
        document
          .querySelector("#post-feed")
          .children[index].classList.toggle("d-none", !isVisible);
      });
    });
  }
}
