const BASE_URL = 'https://api.spoonacular.com'; 
// NOTE: Replace with your actual, non-expired Spoonacular API key
const API_KEY = '60ba206bf8e84e7ab5d041b0357e8a16'; 


export async function getRecipes(query = 'pasta') {
    // 1. Construct the URL with necessary query parameters
    const endpoint = `${BASE_URL}/recipes/complexSearch`;
    const searchParams = new URLSearchParams({
        query: query,
        apiKey: API_KEY, // The API key must be sent as 'apiKey'
        number: 10       // Request 10 results
    });
    
    const url = `${endpoint}?${searchParams.toString()}`;
    console.log(`Fetching from URL: ${url}`);

    try {
        // 2. Perform the fetch request and await the response
        const response = await fetch(url);

        // 3. Check for HTTP errors (e.g., 404, 401, 500)
        if (!response.ok) {
            // Attempt to read the error message from the API
            const errorData = await response.json(); 
            throw new Error(`HTTP error! Status: ${response.status}. Message: ${errorData.message || 'Unknown API Error'}`);
        }

        // 4. Parse the JSON response
        const data = await response.json();
        
        console.log("Recipes retrieved successfully:", data);
        // The API wraps results in a 'results' array, so we return that directly
        return data.results; 

    } catch (error) {
        // 5. Log the error and re-throw for main.js to handle the UI
        console.error('Error fetching recipes:', error.message);
        throw error; 
    }
}