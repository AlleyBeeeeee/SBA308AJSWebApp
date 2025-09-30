const BASE_URL = "https://api.spoonacular.com";
const API_KEY = "91754b66303a4a8a94a5e533873d3233";

export async function getRecipes(query) {
  const url = `${BASE_URL}/recipes/complexSearch?query=${query}&apiKey=${API_KEY}&number=10&addRecipeInformation=true`; 
  console.log(`${url}`);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Error! Status: ${response.status}. Message: ${
          errorData.message || "Error"
        }`
      );
    }
getRecipes()
   const data = await response.json();
        // console.log("Recipes retrieved successfully:", data);
        return data.results; 

    } catch (error) {
       
        throw error; 
  }
}
