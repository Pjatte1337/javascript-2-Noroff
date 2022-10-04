<<<<<<< HEAD
=======

>>>>>>> js2
import { API_SOCIAL_URL } from "../../constant/variables.mjs";

const action = "/auth/register";
const method = "post";

export async function register(profile) {
 console.log(action);
 const registerURL = API_SOCIAL_URL + action;
 const body = JSON.stringify(profile);
 console.log(registerURL);

 const response = await fetch(registerURL, {
  headers: {
   "content-Type": "application/json",
  },
  method,
  body,
 });

<<<<<<< HEAD
 const result = await response.json();
 console.log(result);
}
=======
    const response = await fetch(registerURL, {
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body
    })

    const result = await response.json()
    alert("Congratulations! You are now registered with The Social Universe")
    return result
    console.log(result)
}
>>>>>>> js2
