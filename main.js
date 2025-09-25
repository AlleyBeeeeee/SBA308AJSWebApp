import { getRecipes } from './api.js';
import { renderGallery } from './ui.js';

async function initRecipeApp() {
    try {
        // Example of a user action (e.g., loading the initial gallery)
        const recipes = await getRecipes('salad'); 
        
        // Example function to update the DOM (would be in ui.js)
        renderGallery(recipes); 
        
    } catch (error) {
        // Handle API or network errors in the UI
        document.getElementById('gallery').innerHTML = 
            `<p class="error">Failed to load recipes. Please try again later. (Details: ${error.message})</p>`;
    }
}

initRecipeApp();