import { useRecipeStore } from './recipeStore';  // Ensure this path is correct
import PropTypes from 'prop-types'; // Import PropTypes

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipeId); // Delete the recipe by its ID
      alert("Recipe deleted successfully!");
    }
  };

  return (
    <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white' }}>
      Delete Recipe
    </button>
  );
};

// Add PropTypes validation for 'recipeId'
DeleteRecipeButton.propTypes = {
  recipeId: PropTypes.number.isRequired, // Ensure 'recipeId' is a required number
};

export default DeleteRecipeButton;
