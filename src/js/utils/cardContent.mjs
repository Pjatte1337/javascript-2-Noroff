// Constants for DOM manipulations
export let userAvatar = "";
export let postTags = "";
export let postImage = "";
export let media = "";
export let comments = "";
export let commentsHtml = "";
export let author = "";
export let id = "";
export let title = "";
export let body = "";
export let formattedCreated = "";
export let formattedUpdated = "";

if (media) {
  postImage = `<a href="#openImageModal"><img src="${media}" class="small-image" alt="" loading="lazy"/></a>`;
}

if (comments) {
  const commentsTimeCreated = changeTimeFormat(comments.map((e) => e.created));

  commentsHtml = comments
    .map(
      (e) => `
       <div class="container" id="commentId-${e.id}">
         <div class="card-body">
             <p class="card-text">${e.body}</p>
         </div>
         <div class="card-footer">
             <small class="text-muted"> - ${e.owner}</small>
             <div class="row">
               <small class="text-muted">Published ${commentsTimeCreated}</small>
             </div>
       </div> 
     `
    )
    .join("");
}

if (author.avatar) {
  userAvatar = `<img src="${author.avatar}" class="img-thumbnail user-avatar-small" alt="" loading="lazy" />`;
}

export const cardObject =
  ("div",
  {
    id: `post-id-${id}`,
    class: "card",
  },
  `<a href="" class="">
   <div class="container m-0 p-0">
       <div class="card">
        <div class="card-header">
        <div class="d-flex flex-fill">
        <div class="d-flex flex-fill gap-2 align-items-center">
         ${userAvatar}
        <h4 class="text-muted"><a href="" class="muted-link text-muted">${author.name}</a></h4>
        </div>
        <span class="settings d-flex justify-content-end">
        <div class="dropdown">
        <a class="btn dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa-solid fa-gear"></i></a>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="#">test</a></li>
          <li><a class="dropdown-item" href="#">test</a></li>
          <li><a class="dropdown-item" href="#">test</a></li>
        </ul>
      </div>
        </span>
        </div>
        </div>

        <div class="card-body">
        <h5 class="card-title">${title}</h5>
          <p class="card-text">${body}.</p>
           ${postImage}
        </div>
        <div class="card-footer">
          <div class="row">
            <small class="text-muted">Published ${formattedUpdated}</small>
            <small class="text-muted">Last updated ${formattedUpdated}</small>
          </div>
        </div>
      </div>
      ${commentsHtml}
       </div>
       </a>`);
