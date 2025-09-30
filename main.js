import { getRecipes } from "./api.js";
import {
  showLoading,
  hideLoading,
  renderGallery,
  displayError,
} from "./script.js";

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

async function handleSearch(event) {
    // stop the browser's default behavior
    // if (event) {
    // // event.preventDefault(); 
    // }

    const query = searchInput.value; 
    let searchTerm = (query !== '') ? query : 'pasta';
  
    showLoading()

    try {
      const recipePage = await getRecipes(searchTerm)
      renderGallery(recipePage)
    } catch (e) {
      displayError(e.message)
    }
    finally {
      hideLoading()
    }

  }
  
  async function start() 
  {
    searchForm.addEventListener('submit', handleSearch);
    handleSearch(null);
  }

  start()