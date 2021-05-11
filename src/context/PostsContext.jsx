import React, { createContext } from 'react';
import { usePosts } from './usePosts';

export const PostsContext = createContext();
export const PostsProvider = ({ children }) => {
  const [posts, deletePost, addPost] = usePosts();

  const handleDeletePost = (id) => {
    deletePost(id);
  };

  const handleAddPost = (post) => {
    addPost(post);
  };

  return <PostsContext.Provider value={{ posts, handleDeletePost, handleAddPost }}>{children}</PostsContext.Provider>;
};
