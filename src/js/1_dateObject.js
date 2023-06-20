var getDate = document.getElementById("getDate");
var getDate2 = document.getElementById("getDate2");

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Function to get the day of the week for a given date
function getDayOfWeek(dateString) {
  const date = new Date(dateString);
  const dayIndex = date.getDay();
  return daysOfWeek[dayIndex];
}
getDate.innerHTML = getDayOfWeek("2001-06-12");
console.log(getDayOfWeek("2001-06-12")); // formate YYYY-MM-DD

// Function to get the day of the week for the current date
function getCurrentDayOfWeek() {
  const currentDate = new Date();
  const dayIndex = currentDate.getDay();
  return daysOfWeek[dayIndex];
}

console.log(getCurrentDayOfWeek());
getDate2.innerHTML = getCurrentDayOfWeek();
