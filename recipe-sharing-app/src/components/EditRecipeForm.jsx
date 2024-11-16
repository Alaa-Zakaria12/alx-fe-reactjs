import PropTypes from "prop-types";
import { useState } from "react";
import { useRecipeStore } from './recipeStore';  // Update the path accordingly

const EditRecipeForm = ({ recipe }) => {
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    updateRecipe({ ...recipe, title, description }); // Update the recipe
    alert("Recipe updated successfully!"); // Confirmation
  };

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

// Prop types for validation
EditRecipeForm.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default EditRecipeForm;
