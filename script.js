const gallery = document.getElementById("recipe-gallery");
const searchButton = document.getElementById("search-button");

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
    gallery.innerHTML =
      '<p class="info-message">No recipes found. Try a different search term!</p>';
    return;
  }
  // populate content
  let htmlContent = "";
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i]; // current recipe object

    const recipeLink = recipe.sourceUrl || `#`;

    //ad it to the string
    htmlContent += `
        <a href="${recipeLink}" target="_blank" class="recipe-link">
            <div class="recipe-card">
                <img src="${recipe.image}" alt="${recipe.title}">
                <div class="card-details">
                </div>
            </div>
        </a>
    `;
  }

  // update
  gallery.innerHTML = htmlContent;
}

//err message
export function displayError(message) {
  gallery.innerHTML = `
        <div class="error-box">
            <p class="error-detail">Details: ${message}</p>
        </div>
    `;
}
