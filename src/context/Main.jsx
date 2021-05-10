import React from 'react';
import withUsers from '../hoc/withUsers';
import { AnotherComponent } from './AnotherComponent';
import { PostsProvider } from './PostsContext';

const MainWrapper = ({ users }) => {
  return (
    <PostsProvider>
      <AnotherComponent users={users} />
    </PostsProvider>
  );
};

export default withUsers(MainWrapper);
