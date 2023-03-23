import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'; // installed as a dev dependency
import Modal from './Modal';

const mockStore = configureStore([]);
const store = mockStore({
  continents: {
    selectedContinent: null,
    allContinents: [
      { id: 1, name: 'Africa' },
      { id: 2, name: 'Antarctica' },
      { id: 3, name: 'Asia' },
      { id: 4, name: 'Australia' },
      { id: 5, name: 'Europe' },
      { id: 6, name: 'North America' },
      { id: 7, name: 'South America' },
    ],
  },
});

describe('Modal component', () => {
  it('should render correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Modal />
        </Provider>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
