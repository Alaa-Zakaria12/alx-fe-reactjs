import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // For routing
import App from './App'; // Your main App component

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
