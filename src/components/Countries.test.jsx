import { expect } from 'vitest';
import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Countries from './Countries';

test('Countries component should match snapshot', () => {
  const countryData = {
    num: 1,
    flag: {
      png: 'flag.png',
      alt: 'Flag',
    },
    name: 'Country',
    capital: 'Capital',
    region: 'Continent',
  };
  const { container } = render(
    <Router>
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Countries {...countryData} />
    </Router>,
  );
  expect(container).toMatchSnapshot();
});
