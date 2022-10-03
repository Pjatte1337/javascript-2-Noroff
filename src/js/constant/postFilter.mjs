export async function postFilter() {
 const routeName = document.getElementById(option);

 switch ((routeName, option)) {
  case "default":
  default:
   request = await fetchApi(fetchUrl, "GET", token, null);

  case "newOld":
   target = `&sort=created&sortOrder=desc`;
   request = await fetchApi(fetchUrl + target, "GET", token, null);
   console.log(target);
   console.log("ok desc");
   break;

  case "oldNew":
   target = `&sort=created&sortOrder=asc`;
   request = await fetchApi(fetchUrl + target, "GET", token, null);
   console.log(target);
   console.log("ok asc");
   break;
 }
}


let allCheckbox = document.querySelectorAll("input[type='checkbox']");

for (let i = 0; i < allCheckbox.length; i++) {
    allCheckbox[i].addEventListener("click", displayCheck);
}

function displayCheck(e) {
  if (e.target.checked) {

  } 
  else {
    
  }
}