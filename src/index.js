function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelectorAll("#search-input");
  let cityElement = document.querySelectorAll("#weather-city");
  cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelectorAll("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
