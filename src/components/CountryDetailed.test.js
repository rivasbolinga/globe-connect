import React from 'react';
import { render } from '@testing-library/react';
import CountryDetailed from './CountryDetailed';

describe('CountryDetailed', () => {
  const mockData = {
    flag: { png: 'mock-flag.png', alt: 'Mock flag' },
    name: 'Mock country',
    capital: 'Mock capital',
    population: 'Mock population',
    region: 'Mock region',
    officialName: 'Mock official name',
    subregion: 'Mock subregion',
    tld: 'Mock tld',
    languages: { eng: 'English', esp: 'Spanish' },
    currency: { usd: { name: 'US Dollar', symbol: '$' } },
    borders: ['Mock border 1', 'Mock border 2'],
    nativeName: { common: 'Mock common name', official: 'Mock official name' },
  };

  it('should render country details', () => {
    const { getByText, getByAltText } = render(
      <CountryDetailed {...mockData} />,
    );

    expect(getByAltText('Mock flag')).toBeInTheDocument();
    expect(getByText('Mock country')).toBeInTheDocument();
    expect(getByText('Capital')).toBeInTheDocument();
    expect(getByText('Mock capital')).toBeInTheDocument();
    expect(getByText('Region')).toBeInTheDocument();
    expect(getByText('Mock region')).toBeInTheDocument();
    expect(getByText(1111)).toBeInTheDocument();
    expect(getByText('Mock population')).toBeInTheDocument();
    expect(getByText('Official name')).toBeInTheDocument();
    expect(getByText('Mock official name')).toBeInTheDocument();
    expect(getByText('Subregion')).toBeInTheDocument();
    expect(getByText('Mock subregion')).toBeInTheDocument();
    expect(getByText('tld')).toBeInTheDocument();
    expect(getByText('Mock tld')).toBeInTheDocument();
    expect(getByText('Languages')).toBeInTheDocument();
    expect(getByText('English')).toBeInTheDocument();
    expect(getByText('Spanish')).toBeInTheDocument();
    expect(getByText('Currency symbol')).toBeInTheDocument();
    expect(getByText('$')).toBeInTheDocument();
    expect(getByText('Currency')).toBeInTheDocument();
    expect(getByText('US Dollar')).toBeInTheDocument();
    expect(getByText('Borders')).toBeInTheDocument();
    expect(getByText('Mock border 1')).toBeInTheDocument();
    expect(getByText('Mock border 2')).toBeInTheDocument();
    expect(getByText('Native common name')).toBeInTheDocument();
    expect(getByText('Mock common name')).toBeInTheDocument();
    expect(getByText('Native official name')).toBeInTheDocument();
    expect(getByText('Mock official name')).toBeInTheDocument();
  });
});
