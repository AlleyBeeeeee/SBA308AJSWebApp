const gallery = document.getElementById('recipe-gallery');
const searchButton = document.getElementById('search-button');

export function showLoading() {
   //load state
    gallery.innerHTML = '<div class="loading-state">Loading...</div>';
    // button disable
    searchButton.disabled = true; 
}

export function hideLoading() {
    // enable btn
    searchButton.disabled = false;
}

//shows API recipes
export function renderGallery(recipes) {
    // Check if the recipes array is empty
    if (!recipes || recipes.length === 0) {
        gallery.innerHTML = '<p class="info-message">No recipes found. Try a different search term!</p>';
        return;
    }

    let htmlContent = ''; 
    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i]; // current recipe object

        //ad it to the string
        htmlContent += `
            <div class="recipe-card">
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="card-details">
                    <h3>${recipe.title}</h3>
                    <p>Spoonacular ID: ${recipe.id}</p>
                </div>
            </div>
        `;
    }

    // update
    gallery.innerHTML = htmlContent;
}

//err message
export function displayError(message) {
    gallery.innerHTML = `
        <div class="error-box">
            <p>Failed to load recipes. Please check your API key and network connection.</p>
            <p class="error-detail">Details: ${message}</p>
        </div>
    `;
}