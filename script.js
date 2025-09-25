const BASE_URL = 'https://api.spoonacular.com'; 
const API_KEY = '60ba206bf8e84e7ab5d041b0357e8a16'; 

/**
 * Fetches recipes based on optional search parameters.
 * Uses a GET request, async/await, and proper API key placement.
 * * @param {string} query - The search term (e.g., 'pasta', 'chicken').
 * @returns {Promise<Object>} The API response data.
 */
export async function getRecipes(query = 'pasta') {
    // 1. Construct the full URL, including the API key and query parameters.
    const endpoint = `${BASE_URL}/recipes/complexSearch`;
    const searchParams = new URLSearchParams({
        query: query,
        apiKey: API_KEY, // The API key must be sent as 'apiKey'
        number: 10       // Request 10 results
    });
    
    const url = `${endpoint}?${searchParams.toString()}`;
    
    console.log(`Fetching from URL: ${url}`); // Good for debugging

    try {
        // 2. Perform the fetch request
        const response = await fetch(url);

        // 3. Check for HTTP errors (e.g., 404, 401/Invalid Key, 500)
        if (!response.ok) {
            // Check for specific API error messages (like key exhaustion)
            const errorData = await response.json(); 
            throw new Error(`HTTP error! Status: ${response.status}. Message: ${errorData.message || 'Unknown API Error'}`);
        }

        // 4. Parse the JSON response
        const data = await response.json();
        
        console.log("Recipes retrieved successfully:", data);
        return data.results; // Spoonacular complexSearch returns an object with a 'results' array

    } catch (error) {
        // Log the error and throw it up the chain to be handled by main.js
        console.error('Error fetching recipes:', error.message);
        throw error; // Re-throw to allow the calling function to handle the UI update (e.g., show error message)
    }
}s