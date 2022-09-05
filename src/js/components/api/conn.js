const baseUrl = `https://nf-api.onrender.com`;
const postUrl = `/api/v1/social/posts`;

const options = {
 headers: {
  Authorization:

 },
};

async function getApi() {
 try {
  const request = await fetch(`https://nf-api.onrender.com/api/v1/social/posts`, options);
  const response = await request.json();

  console.log(response);
 } catch (error) {
  console.error(error);
 }
}

getApi();
