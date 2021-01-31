import React from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';
const fetchPlanets = async (key, greeting, page) => {
  console.log(greeting, key);
  const res = await fetch(`https://swapi.dev/api/planets?page=${page}`);
  return res.json();
};
export const Planets = () => {
  const [page, setPage] = React.useState(1);
  const { data, status, isPreviousData } = useQuery(
    ['planets', page],
    () => fetchPlanets('key', 'Hello Ninjas', page),
    {
      staleTime: 2000,
      retry: 2,
      onSuccess: () => console.log('No problem, data fetched'),
    }
  );
  return (
    <div>
      <h2>Planets</h2>
      <p>You are on : {page} page</p>
      <button disabled={page === 0} onClick={() => setPage((page) => page - 1)}>
        Previous Page
      </button>
      <button
        disabled={page === 6}
        onClick={() => {
          if (!isPreviousData) {
            setPage((page) => page + 1);
          }
        }}>
        Next Page
      </button>
      {status === 'error' && <div>Error fetching data</div>}
      {status === 'loading' && <div>Loading data...</div>}
      {status === 'success' && (
        <div>
          {Array.isArray(data.results) &&
            data.results.map((planet) => <Planet planet={planet} key={planet.name} />)}
        </div>
      )}
    </div>
  );
};
