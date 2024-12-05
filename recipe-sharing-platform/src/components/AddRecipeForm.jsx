import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation logic
    if (!title || !ingredients || !steps) {
      setError("All fields are required.");
      return;
    }

    const ingredientList = ingredients.split(",").map((item) => item.trim());
    if (ingredientList.length < 2) {
      setError("Please list at least two ingredients.");
      return;
    }

    setError("");
    const newRecipe = {
      title,
      ingredients: ingredientList,
      steps,
    };

    console.log("New Recipe Submitted:", newRecipe);

    // Clear the form fields
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h1>
      <form
        className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6"
        onSubmit={handleSubmit}
      >
        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Recipe Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter the recipe title"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="ingredients"
          >
            Ingredients (separated by commas)
          </label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter ingredients separated by commas"
          ></textarea>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="steps"
          >
            Preparation Steps
          </label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter preparation steps"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
