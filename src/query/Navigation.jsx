import React from 'react';

export const Navigation = ({ setPage }) => {
  return (
    <nav>
      <button onClick={() => setPage('planets')}>Planet</button>
      <button onClick={() => setPage('people')}>People</button>
    </nav>
  );
};
