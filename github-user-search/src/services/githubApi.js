import axios from 'axios';

// Base URL for GitHub API
const BASE_URL = 'https://api.github.com';

// Create an instance of Axios with optional authentication
const githubApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `token ${process.env.REACT_APP_GITHUB_API_KEY || ''}`, // Use the key if available
  },
});

// Function to search users by username
export const searchUsers = async (query) => {
  try {
    const response = await githubApi.get(`/search/users?q=${query}`);
    return response.data; // Returns the search results
  } catch (error) {
    console.error('Error fetching data from GitHub API:', error);
    throw error;
  }
};
