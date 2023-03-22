import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchCountries, selectCountries } from '../redux/countriesSlice';
import CountryDetailed from '../components/CountryDetailed';

const SingleCountry = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { countries } = useSelector(selectCountries);

  useEffect(() => {
    if (!countries.length) {
      dispatch(fetchCountries());
    }
  }, [countries, dispatch]);

  const country = countries.find((country) => country.cca3 === id);
  return (
    <Wrapper>
      {country && (
        <div>
          <div className="header">
            <Link to="/" className="link">
              <button type="button">back</button>
            </Link>
            <h2>Country details</h2>
          </div>
          <CountryDetailed
            key={country.cca3}
            flag={country.flags}
            name={country.name.common}
            capital={country.capital}
            population={country.population}
            region={country.region}
            officialName={country.name.official}
            subregion={country.subregion}
            tld={country.tld[0]}
            languages={country.languages}
            currency={country.currencies}
            borders={country.borders}
            nativeName={country.name.nativeName}
          />
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.section`
`;

export default SingleCountry;
