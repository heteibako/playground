import React from 'react';
import { User } from './User';
import withUsers from './withUsers';

const Main = ({ users }) => {
  return (
    <div className="container">
      <div className="row my-4">
        <div className="col">
          <h1>Users</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <User users={users} />
        </div>
      </div>
    </div>
  );
};

export default withUsers(Main);
