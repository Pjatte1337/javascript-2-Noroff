export function changeTimeFormat(date) {
 const apiDate = new Date(date);
 const option = { weekday: "long", year: "numeric", month: "long", day: "numeric" };

 return apiDate.toLocaleDateString("en-us", option);
}
