import React from 'react';
import { useSearchParams } from 'react-router-dom';

function About() {
  const [params, setSearchParams] = useSearchParams();
  return (
    <div>
      <h1>About</h1>
      <h2>{params.getAll('filter')}</h2>
      <input
        value={params.get('filter') || ''}
        onChange={(event) => {
          const filter = event.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
      />
    </div>
  );
}

export default About;
