import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import { useRecipeStore } from './stores/recipeStore';
import SearchBar from './components/SearchBar';

const App = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  
  return (
    <Router>
      <div>
        <SearchBar />
        <Routes>
          <Route path="/" element={<RecipeList recipes={recipes} />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
          <Route path="/edit/:recipeId" element={<EditRecipeForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
