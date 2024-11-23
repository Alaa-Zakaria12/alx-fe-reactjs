import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch posts from the API
const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
};

const PostsComponent = () => {
  // useQuery hook with additional options: refetchOnWindowFocus, keepPreviousData, cacheTime, and staleTime
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    refetchOnWindowFocus: true,  // Refetch data when the window is focused again
    keepPreviousData: true,      // Keep previous data while fetching new data
    cacheTime: 1000 * 60 * 5,    // Cache time set to 5 minutes (in milliseconds)
    staleTime: 1000 * 60 * 2,    // Stale time set to 2 minutes (in milliseconds)
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching posts</div>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={refetch}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
