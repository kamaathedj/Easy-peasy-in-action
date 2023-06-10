/* eslint-disable array-callback-return */
import { useStoreState, useStoreActions } from 'easy-peasy';

function Product() {
  const people = useStoreState((state) => state.people);
  const play = useStoreActions((actions) => actions.play);
  return (
    <div>
      <h1>product</h1>
      <h5>List of buyers</h5>
      <button onClick={play} type="submit">play</button>
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
