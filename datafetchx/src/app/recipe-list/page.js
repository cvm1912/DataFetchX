import RecipeList from "@/components/recipe-list/page";

async function fetchRecipes(){
    try{
        const response = await fetch('https://dummyjson.com/recipes', {cache: 'no-store'});
        const data = await response.json();
        return data.recipes;

    }catch(error){
        console.error("Error fetching recipes:", error);
        return [];
    }
}
export default async function RecipePage() {
  const recipesList = await fetchRecipes();
  console.log(recipesList);
  return (
    <div>
      <RecipeList recipes = {recipesList} />
    </div>
  );
}