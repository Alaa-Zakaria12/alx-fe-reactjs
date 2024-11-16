// RecipeDetails.jsx
import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton'; // Add the import here
import { Link } from 'react-router-dom'; // Import Link here

const RecipeDetails = () => {
  const { recipeId } = useParams(); // Get the recipeId from URL params
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(recipeId))
  );

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      {/* Edit and Delete buttons */}
      <Link to={`/edit/${recipeId}`}>Edit Recipe</Link>
      <DeleteRecipeButton recipeId={recipeId} />
    </div>
  );
};

export default RecipeDetails;
