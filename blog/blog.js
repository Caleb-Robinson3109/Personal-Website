// Select the .date element from the HTML
const dateElement = document.querySelector(".date");

/**
 * Format the given date to a string in the format "Month Day, Year"
 * @param {Date} date - The date to be formatted
 * @returns {string} - The formatted date string
 */
function formatDate(date) {
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  return `${MONTHS[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}

// Get the current date
const currentDate = new Date();

// Format the date using the formatDate function
const formattedDate = formatDate(currentDate);

// Set the formatted date as the content of the .date element
dateElement.textContent = formattedDate;


/**
 * Format the given date to a string in the format "Month Day, Year"
 * @param {Date} date - The date to be formatted
 */
function dailyPhoto(date){
  const photos = [
    {url: "daily photos/cheese.jpg", desc: "video game cheese in a suit"},
    {url: "daily photos/engineerMonkey.png", desc: "monkey with many weapons"},
    {url: "daily photos/lowPolyKiwi.png", desc: "silly little kiwi bird"},
    {url: "daily photos/ninjaFish.png", desc: "fish being cut with ninja star"},
    {url: "daily photos/snailMail.png", desc: "cartoon snail"},
    {url: "daily photos/splat.jpg", desc: "funny plush cat"},
    {url: "daily photos/tokiPona.png", desc: "toki pona symbol"}
  ];
  const getPhoto = photos[date.getDay()];
  document.getElementById('random-photo').src = getPhoto.url;
  document.getElementById('random-photo').alt = getPhoto.desc;
}

document.addEventListener("DOMContentLoaded", dailyPhoto(currentDate));
