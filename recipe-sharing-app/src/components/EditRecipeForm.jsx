import { useState } from 'react';
import { useRecipeStore } from './recipeStore'; // Adjust path if needed
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === parseInt(recipeId))
  );

  const [title, setTitle] = useState(recipe?.title || '');
  const [description, setDescription] = useState(recipe?.description || '');
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    updateRecipe({ ...recipe, title, description });

    alert('Recipe updated successfully!');
    navigate(`/recipe/${recipeId}`); // Navigate to the updated recipe page
  };

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Edit Recipe</h3>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Update Recipe</button>
    </form>
  );
};

// Add PropTypes for validation
EditRecipeForm.propTypes = {
  recipeId: PropTypes.string.isRequired, // Assuming recipeId is a string from URL params
};

export default EditRecipeForm;
