import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchCountries, selectCountries } from '../redux/countriesSlice';
import Countries from '../components/Countries';
import { openModal, selectSelectedContinent } from '../redux/modalSlice';

const Home = () => {
  const dispatch = useDispatch();
  const { countries } = useSelector(selectCountries);
  const selectedContinent = useSelector(selectSelectedContinent);
  // -- First we check if there is any countries in the array
  // then we dispatch fetchCountries to get the data from the API
  useEffect(() => {
    if (!countries.length) {
      dispatch(fetchCountries());
    }
  }, [dispatch, countries]);

  // -- Create a variable with all the countries that has the selected.
  const filteredCountries = countries.filter((ct) => ct.continents.includes(selectedContinent));
  return (
    <Wrapper className="home">
      <div className="header">
        { selectedContinent && (
        <img
          alt="world glove icon"
          src="https://img.icons8.com/dusk/64/null/geography--v1.png"
        />
        )}
        <h1>Countries in the world</h1>
        <button type="button" onClick={() => dispatch(openModal())}>
          {' '}
          <i className="fa-solid fa-gear" />
        </button>
      </div>
      <div className="picture-container">
        <img
          className="picture"
          alt="world map"
          src="https://www.worldatlas.com/r/w960-q80/upload/f4/e0/49/shutterstock-1665254809.png"
        />
      </div>
      <div className="how-many">
        <h3>{selectedContinent || 'How many countries there are in the world?'}</h3>
      </div>
      <div className="country-list">
        {filteredCountries.length
          ? filteredCountries.map((country) => (
            <Countries
              key={country.cca3}
              num={country.cca3}
              flag={country.flags}
              name={country.name.common}
              capital={country.capital}
              population={country.population}
              region={country.region}
            />
          ))
          : countries.map((country) => (
            <Countries
              key={country.cca3}
              num={country.cca3}
              flag={country.flags}
              name={country.name.common}
              capital={country.capital}
              population={country.population}
              region={country.region}
            />
          ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: white;
  .header {
    display: flex;
    gap: 15px;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    img {
      width: 60px;
      height: 60px;
    }
  }
  .picture {
    width: 100%;
  }
  .how-many {
    color: #182734;
    border-bottom: 2px solid #182734;
    padding: 5px;
  }
  .country-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }
  @media (min-width: 425px) {
    width: 425px;
  }
`;

export default Home;
