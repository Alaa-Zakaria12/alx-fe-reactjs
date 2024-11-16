import { Link } from "react-router-dom";
import { useRecipeStore } from "../stores/recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: "1rem" }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
          </div>
        ))
      ) : (
        <p>No recipes found. Add some!</p>
      )}
    </div>
  );
};

export default RecipeList;
