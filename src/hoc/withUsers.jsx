import React from 'react';
import useUsers from './useUsers';
const withUsers = (WrappedComponent) => {
  const Users = (props) => {
    const users = useUsers();
    return <WrappedComponent {...props} users={users} />;
  };

  return Users;
};

export default withUsers;
