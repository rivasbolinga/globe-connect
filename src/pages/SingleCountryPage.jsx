import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchCountries, selectCountries } from '../redux/countriesSlice';
import CountryDetailed from '../components/CountryDetailed';

const SingleCountry = () => {
  const { id } = useParams(); // -take the id from the state.
  const dispatch = useDispatch();
  const { countries } = useSelector(selectCountries);
  useEffect(() => {
    if (!countries.length) {
      dispatch(fetchCountries());
    }
  }, [countries, dispatch]);
  // -- Create a new array with just the country that has the same id than the one clicked.
  const country = countries.find((country) => country.cca3 === id);
  return (
    <Wrapper>
      {country && (
        <div>
          <div className="header">
            <Link to="/" className="link">
              <button type="button">
                <i className="fa-solid fa-angle-left" />
              </button>
            </Link>
            <h2>Country details</h2>
          </div>
          <CountryDetailed
            key={id}
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
  width: 100%;
  .header {
    display: flex;
    flex-direction: raws;
    justify-content: start;
    background-color: white;
    padding: 10px;
    align-items: center;
    gap: 60px;
    h2 {
      color: #192a38;
    }
  }
  @media (min-width:768px) {
    width:425px;
  }
`;

export default SingleCountry;
