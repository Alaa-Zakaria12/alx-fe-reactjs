import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  // Always call the hook once and derive the filtered recipes after
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  // If there are no filtered results, fall back to the full list of recipes
  const recipesToDisplay = filteredRecipes.length ? filteredRecipes : recipes;

  return (
    <div>
      {recipesToDisplay.length > 0 ? (
        recipesToDisplay.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
            <Link to={`/recipe/${recipe.id}`}>View Details</Link>
            <Link to={`/edit/${recipe.id}`}>Edit</Link>
          </div>
        ))
      ) : (
        <p>No recipes found.</p>
      )}
    </div>
  );
};

export default RecipeList;
