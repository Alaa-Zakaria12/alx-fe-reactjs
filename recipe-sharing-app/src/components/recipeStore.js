import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],  // Array to hold all recipes
  favorites: [],  // Array to hold IDs of favorite recipes
  addFavorite: (recipeId) => set(state => ({
    favorites: [...state.favorites, recipeId]
  })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],  // Array to hold recommended recipes
  generateRecommendations: () => set(state => {
    // Generate recommendations based on user's favorite recipes
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;
