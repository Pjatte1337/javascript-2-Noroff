// Importing all modules
import * as user from "./api/index.mjs";
import { logOut } from "./api/auth/logout.mjs";
import { displayProfile } from "./api/profile/profile.mjs";
import { display404Page } from "./constant/404page.mjs";
import { checkUserStatus } from "./constant/statcheck.mjs";
import { postFeed } from "./api/posts/postFeed.mjs";
import { postItemByID } from "./api/posts/postItemByID.mjs";
import { setRegisterFormListener as setRegisterFormListener } from "./utils/listener/register.mjs";
import { waitForData } from "./api/posts/comments.mjs";
import { test } from "./api/posts/functions/filter.mjs";
import { userSearch } from "./api/posts/functions/search.mjs";

// Importing layout
import { generateFooter } from "./constant/layout/footer.js";

// Creating variables to use in the if statement under
const logOutButton = document.querySelector("#logout");

// Executing logout function if the logout button is present
if (logOutButton) {
 logOut();
}

const defaultTitle = "The social universe";

/**
 *
 */
async function router() {
 const routeName = document.body.id;

 switch (routeName) {
  // Executing sign in function if the location is based on the log in location
  case "index":
   // register form
   setRegisterFormListener();
   user.formEvent();
   checkUserStatus(localStorage.getItem("token"));
   generateFooter();
   document.querySelector("title").innerText = defaultTitle + ` || Homepage`;
   break;

  // Executing the the function for the profile page layout
  case "profile":
   displayProfile();
   generateFooter();
   document.querySelector("title").innerText = defaultTitle + ` || ` + localStorage.getItem("username");
   break;

  case "allPosts":
   postFeed();
   generateFooter();
   userSearch();
   test();
   document.querySelector("title").innerText = defaultTitle + ` || Feed wall`;
   break;

  case "postItemByID":
   postItemByID();
   generateFooter();
   waitForData();
   document.querySelector("title").innerText = defaultTitle + ` || Post`;
   break;

  case "testing":
   postFeed();
   generateFooter();
   document.querySelector("title").innerText = defaultTitle + ` || Feed wall`;
   break;

  case "404":
  default:
   display404Page();
   generateFooter();
 }
}
router();
