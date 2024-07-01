import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost:8080/posts');
        setPosts(response.data.posts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>
            <strong>Timestamp:</strong> {post.timestamp}<br />
            <strong>Prompt:</strong> {post.prompt}<br />
            <strong>Post:</strong> {post.post}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchPosts;
