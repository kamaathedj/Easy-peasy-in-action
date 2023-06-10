import { createStore, action } from 'easy-peasy';

/**
 * this is a people store
 */
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
    state.people.forEach((element) => {
      console.log(element.name);
    });
  }),
});

export default store;
