import { useEffect, useState } from 'react';
import axios from 'axios';
const useUsers = () => {
  const [users, setUsers] = useState(null);
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => setUsers(res.data));
  }, []);
  return users;
};

export default useUsers;
