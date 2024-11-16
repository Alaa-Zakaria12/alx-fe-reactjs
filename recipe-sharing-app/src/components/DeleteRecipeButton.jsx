// DeleteRecipeButton.jsx
import { useRecipeStore } from './recipeStore';
import PropTypes from 'prop-types';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipeId);
      alert('Recipe deleted successfully!');
    }
  };

  return <button onClick={handleDelete}>Delete Recipe</button>;
};

DeleteRecipeButton.propTypes = {
  recipeId: PropTypes.number.isRequired, // Validate recipeId prop
};

export default DeleteRecipeButton;
