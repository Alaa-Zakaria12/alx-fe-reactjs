import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";

const App = () => {
  return (
    <Router>
      <div style={{ padding: "1rem" }}>
        <h1>Recipe Sharing App</h1>
        <nav>
          <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
          <Link to="/add-recipe">Add Recipe</Link>
        </nav>

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/add-recipe" element={<AddRecipeForm />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
