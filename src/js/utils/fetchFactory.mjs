import { message } from "../constant/message.mjs";

export async function fetch(url, endpoint, param, method, token, body) {
 token = localStorage.getItem("token");

 try {
  if (token) {
   const fetchReq = await fetch(url + endpoint + param, {
    method: `${method}`,
    headers: {
     "Content-Type": "application/json",
     Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(`${body}`),
   });

   const fetchRes = await fetchReq.json();

   if (!fetchRes.ok) {
    console.log("You are logged in", fetchRes);
   } else {
    window.location.href = "./";
    console.log("Sorry, you was not registered as a valid user. Please create a account");
    message("invalid");
   }
  } else if (endpoint) {
   const fetchReq = await fetch(url + endpoint + param, {
    method: `${method}`,
    headers: {
     "Content-Type": "application/json",
     Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(`${body}`),
   });

   const fetchRes = await fetchReq.json();

   if (!fetchRes.ok) {
    console.log("You are logged in", fetchRes);
   } else {
    window.location.href = "./";
    console.log("Sorry, you was not registered as a valid user. Please create a account");
    message("invalid");
   }
  } else {
   const fetchReq = await fetch(url + endpoint + param, {
    method: `${method}`,
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify(`${body}`),
   });

   const fetchRes = await fetchReq.json();

   if (!fetchRes.ok) {
    console.log("You are logged in", fetchRes);
   } else {
    window.location.href = "./";
    console.log("Sorry, you was not registered as a valid user. Please create a account");
    message("invalid");
   }
  }
 } catch (error) {
  message("error");
  console.error(error);
 }
}
