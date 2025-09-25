// script.js - Handles all DOM manipulation (UI)

const gallery = document.getElementById('recipe-gallery');
const searchButton = document.getElementById('search-button');

export function showLoading() {
    // Show a loading state visually
    gallery.innerHTML = '<div class="loading-state">Loading...</div>';
    // Disable button to prevent multiple requests (Event Loop requirement)
    searchButton.disabled = true; 
}

export function hideLoading() {
    searchButton.disabled = false;
}


//  fetched recipes into cards 
export function renderGallery(recipes) {
    if (!recipes || recipes.length === 0) {
        gallery.innerHTML = '<p class="info-message">No recipes found. Try a different search term or ingredient!</p>';
        return;
    }

    //  HTML for each recipe card
    const html = recipes.map(recipe => `
        <div class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.title}">
            <div class="card-details">
                <h3>${recipe.title}</h3>
                <p>Spoonacular ID: ${recipe.id}</p>
            </div>
        </div>
    `).join('');

    gallery.innerHTML = html;
}
export function displayError(message) {
    gallery.innerHTML = `<div class="error-box">
                            <h2>Error!</h2>
                            <p>Failed to load recipes. Check your API key and network connection.</p>
                            <p class="error-detail">Details: ${message}</p>
                         </div>`;
}