import React, { useEffect, useState } from 'react';
import axios from 'axios';
const withUsers = (WrappedComponent) => {
  const Users = (props) => {
    const [users, setUsers] = useState(null);
    useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/users').then((res) => setUsers(res.data));
    }, []);
    return <WrappedComponent {...props} users={users} />;
  };

  return Users;
};

export default withUsers;
