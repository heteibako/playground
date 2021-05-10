import React, { useContext } from 'react';
import { PostsContext } from './PostsContext';

export const AnotherComponent = ({ users }) => {
  const posts = useContext(PostsContext);
  return (
    <div style={styles.wrapper}>
      <div style={styles.column}>{Array.isArray(users) && users.map((user) => <p>{user.username}</p>)}</div>
      <div style={styles.column}>{Array.isArray(posts) && posts.map((post) => <p>{post.title}</p>)}</div>
    </div>
  );
};

const styles = {
  column: {
    width: '50%',
    display: 'inline-flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignContent: 'flex-start',
  },
  wrapper: {
    padding: '2rem',
  },
};
