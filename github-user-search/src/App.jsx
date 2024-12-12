import { useState } from 'react';
import { searchUsers } from './services/githubApi';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    try {
      const data = await searchUsers(searchQuery);
      setResults(data.items); // GitHub API returns results in `items`
    } catch (error) {
      console.error('Error searching users:', error);
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <header>
        <h1>GitHub User Search Application</h1>
      </header>
      <main>
        <input
          type="text"
          placeholder="Search GitHub users"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <ul>
          {results.map((user) => (
            <li key={user.id}>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                {user.login}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
