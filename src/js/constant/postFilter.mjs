export function filterPosts() {
 if (request) {
  const data = request;
  const dataFilter = data.filter(function (resp) {
   return resp.author.email == localEmail;
  });
 }
}
