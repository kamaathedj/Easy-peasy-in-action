import { createStore, action } from 'easy-peasy';

const store = createStore({
  people: [
    {
      name: 'john doe',
      dob: '2000',
    },
    {
      name: 'jane doe',
      dob: '2002',
    },
  ],

  play: action((state) => {
    // eslint-disable-next-line no-console
    console.log(state.people.name);
  }),
});

export default store;
