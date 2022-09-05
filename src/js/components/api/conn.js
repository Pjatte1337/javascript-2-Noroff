const baseUrl = `https://nf-api.onrender.com`;
const postUrl = `/api/v1/social/posts`;

const options = {
 headers: {
  Authorization:
   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwibmFtZSI6IkNocmlzdG9ubjkzIiwiZW1haWwiOiJDaHJUb24zMTg5OUBzdHVkLm5vcm9mZi5ubyIsImF2YXRhciI6InN0cmluZyIsImJhbm5lciI6InN0cmluZyIsImlhdCI6MTY2MjM3NDMyM30.ZWx_PjIMfcDd8m6Iz9EQqHzPW4wbGNAjydOqKcj2pkg",
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
