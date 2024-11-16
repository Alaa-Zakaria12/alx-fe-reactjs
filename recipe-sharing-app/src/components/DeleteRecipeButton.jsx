import { useRecipeStore } from './recipeStore';  // Adjust the path if needed
import { useNavigate } from 'react-router-dom';  // Import useNavigate for redirection
import PropTypes from 'prop-types';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);  // Delete the recipe from the store
    alert('Recipe deleted successfully!');
    navigate('/');  // Redirect to the home page or recipe list after deletion
  };

  return (
    <button onClick={handleDelete}>Delete Recipe</button>
  );
};

// Add PropTypes for validation
DeleteRecipeButton.propTypes = {
  recipeId: PropTypes.string.isRequired,  // Assuming recipeId is a string from URL params
};

export default DeleteRecipeButton;
