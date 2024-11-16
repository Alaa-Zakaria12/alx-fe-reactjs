// RecipeDetails
import { useRecipeStore } from './recipeStore';  // Update path if needed
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import DeleteRecipeButton from './DeleteRecipeButton';  // Import the DeleteRecipeButton

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) => state.recipes.find((recipe) => recipe.id === recipeId));
  const navigate = useNavigate();

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <DeleteRecipeButton recipeId={recipe.id} />  {/* Add the delete button */}
      <button onClick={() => navigate(`/edit-recipe/${recipe.id}`)}>Edit Recipe</button>
    </div>
  );
};

RecipeDetails.propTypes = {
  recipeId: PropTypes.number.isRequired,
};

export default RecipeDetails;