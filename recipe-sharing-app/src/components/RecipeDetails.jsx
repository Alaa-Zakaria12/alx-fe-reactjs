import { useParams } from 'react-router-dom'; // Import to get route params
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';

const RecipeDetails = () => {
  const { id } = useParams();  // Use this to extract the recipe id from the URL
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(id)) // Make sure to convert id to number
  );

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <EditRecipeForm recipe={recipe} />
    </div>
  );
};

export default RecipeDetails;
