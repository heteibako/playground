import React from 'react';

export const User = ({ users }) => {
  return (
    <>
      {Array.isArray(users) &&
        users.map((user) => (
          <div className="card w-75" key={user.id}>
            <div className="card-body">
              <h5 className="card-title">{user.name}</h5>
              <p className="card-text">{user.username}</p>
            </div>
          </div>
        ))}
    </>
  );
};
