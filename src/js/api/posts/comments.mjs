import * as apiVar from "../../constant/variables.mjs";
import { fetchApi } from "../../constant/fetch.mjs";
import { message } from "../../constant/message.mjs";

// Retrieving items from storage
const token = localStorage.getItem("token");

// Re-declaring variables from import
const url = apiVar.baseURL;
const endpointPosts = apiVar.getPosts;

const queryString = document.location.search;
const params = new URLSearchParams(queryString);

const fetchUrl = url + endpointPosts;

// Empty variables
let id = "";

// function variables

export async function waitForData() {
 const commentsBtn = document.querySelector("#btn-comments");
 const commentsForm = document.querySelector("#comments_form");

 if (!commentsBtn) {
  commentsBtn.addEventListener("click", openComments());
 }
}

function eventListener() {
 commentsBtn.addEventListener("click", openComments());
}

function openComments() {
 const commentsContainer = document.querySelector("#comments");
 commentsContainer.style.display = "flex";
}

function sendData() {}
