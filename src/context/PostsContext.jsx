import React, { createContext } from 'react';
import { usePosts } from './usePosts';

export const PostsContext = createContext();
export const PostsProvider = ({ children }) => {
  const posts = usePosts();

  return <PostsContext.Provider value={posts}>{children}</PostsContext.Provider>;
};
