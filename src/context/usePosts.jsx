import axios from 'axios';
import { useState, useEffect } from 'react';

export const usePosts = () => {
  const [posts, setPosts] = useState([]);

  const deletePost = (id) => {
    const newPosts = [...posts].filter((item) => item.id !== id);
    setPosts(newPosts);
  };

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => setPosts(res.data));
  }, []);

  return [posts, deletePost];
};
