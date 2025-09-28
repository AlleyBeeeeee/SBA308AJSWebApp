import { getRecipes } from "../api.js";
import {
  showLoading,
  hideLoading,
  renderGallery,
  displayError,
} from "./script.js";

const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

//user input
async function handleSearch(event) {
  event.preventDefault();

  const query = searchInput.value.trim();

  let searchTerm = "pasta";
  if (query !== "") {
    searchTerm = query;
  }

showLoading  ();

  try {
    const recipes = await getRecipes(searchTerm);

    renderGallery(recipes);
  } catch (error) {
    displayError(error.message);
  } finally {
    hideLoading();
  }
}

function start() {
  searchForm.addEventListener("submit", handleSearch);

  handleSearch({ preventDefault: () => {} });
}

start();
