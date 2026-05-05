async function fetchRecipesDetails({ id }) {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`, { cache: "no-store" });
    const data = await response.json();
    return data;
  } catch (err) {
    console.error("Error fetching recipe details:", err);
    return null;
  }
}

export default async function RecipeDetails({ params }) {
  const { details } = await params;
  const recipeDetails = await fetchRecipesDetails({ id: details });

  return (
    <div className="py-10 px-5">
      <div className="flex items-center justify-center p-6">
        <h1 className="text-6xl font-bold text-gray-800">Recipe Details.</h1>
      </div>

      <div className="w-full h-[600px] flex items-center justify-between ">
        <div className="w-1/2 h-full flex items-center justify-center">
          <img src={recipeDetails.image} alt={recipeDetails.name} className="w-full h-full object-cover rounded-md bg-center" />
        </div>
        <div className="w-1/2 h-full flex flex-col px-5 py-10">
          <h2 className="text-6xl font-bold">{recipeDetails.name}</h2>
          <p className="text-3xl mt-5">Cuisine: {recipeDetails.cuisine}</p>
          <p className="text-lg">Difficulty: {recipeDetails.difficulty}</p>
          <p className="text-lg">Prep Time: {recipeDetails.prepTimeMinutes} minutes</p>
          <ul className="mt-5 list-disc list-inside">
            <h3 className="text-2xl font-bold">Ingredients:</h3>
            {recipeDetails.ingredients.map((ingredient, index) => (
              <li key={index} className="text-lg">{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
