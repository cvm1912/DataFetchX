import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Link from "next/link";

export default function RecipeList({ recipes }) {
  return (
    <div>
      <div className="p-4 mx-auto lg:max-w-6xl md:max-w-4xl sm:max-w-full flex items-center justify-center">
        <h2 className="text-4xl font-bold">Cuisine Recipes</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes && recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Link key={recipe.id} href={`/recipe/${recipe.id}`}>
              <Card>
                 <CardContent className="w-full h-full overflow-hidden">
                    <img
                      src={recipe.image}
                      alt={recipe.name}
                      className="w-full h-48 object-cover rounded-md"
                    />    
                 </CardContent>
                 <div className="p-4">
                  <h1 className="text-xl font-bold mx-2 ">{recipe.name}</h1>
                  <div className="flex justify-between">
                    <p className="text-gray-600 mx-2">{recipe.cuisine}</p>
                    <p className="text-gray-600 mx-2">{recipe.prepTimeMinutes} mins</p>
                  </div>
                  </div>
              </Card>
            </Link>
          ))
        ) : (
          <p>No recipes found.</p>
        )}
      </div>
    </div>
  );
}
