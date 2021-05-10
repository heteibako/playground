import React, { createContext } from 'react';
import { usePosts } from './usePosts';

export const PostsContext = createContext();
export const PostsProvider = ({ children }) => {
  const [posts, deletePost] = usePosts();

  const handleDeletePost = (id) => {
    deletePost(id);
  };

  return <PostsContext.Provider value={{ posts, handleDeletePost }}>{children}</PostsContext.Provider>;
};
