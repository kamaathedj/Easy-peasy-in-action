/* eslint-disable array-callback-return */
import React from 'react';
import { useStoreState } from 'easy-peasy';

function Product() {
  const people = useStoreState((state) => state.people);
  return (
    <div>
      <h1>product</h1>
      <h5>List of buyers</h5>
      <ul>
        {people.map((p) => (
          <div key={p.name}>
            <p>{p.name}</p>
            <p>{p.dob}</p>
          </div>

        ))}

      </ul>

    </div>
  );
}

export default Product;
