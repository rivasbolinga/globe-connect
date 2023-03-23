import { render } from '@testing-library/react';
import CountryDetailed from './CountryDetailed';

describe('CountryDetailed', () => {
  it('should match snapshot', () => {
    const { asFragment } = render(
      <CountryDetailed
        flag={{ png: 'flag.png', alt: 'Flag Alt Text' }}
        name="Country Name"
        capital="Capital City"
        population={1000000}
        region="Region Name"
        officialName="Official Name"
        subregion="Subregion Name"
        tld=".tld"
        languages={['Language 1', 'Language 2']}
        currency={{ name: 'Currency Name', symbol: 'Currency Symbol' }}
        borders={['Border 1', 'Border 2']}
        nativeName={{
          common: 'Native Common Name',
          official: 'Native Official Name',
        }}
      />,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
