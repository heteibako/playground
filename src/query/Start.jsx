import React, { useState } from 'react';
import './index.css';
import { Navigation } from './Navigation';
import { People } from './People';
import { Planets } from './Planets';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

const queryClient = new QueryClient();

export const Start = () => {
  const [page, setPage] = useState('planets');
  return (
    <QueryClientProvider client={queryClient}>
      <div className="wrapper">
        <div className="App">
          <h1>Star Wars Info</h1>
          <Navigation setPage={setPage} />
          <div className="content">{page === 'planets' ? <Planets /> : <People />}</div>
        </div>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
