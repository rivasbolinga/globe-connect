import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchCountries, selectCountries } from '../redux/countriesSlice';
import Countries from '../components/Countries';
import { openModal, selectSelectedContinent } from '../redux/modalSlice';
import { continentData, continentImages } from '../utils/utils';

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
        <img
          alt="world glove icon"
          src="https://img.icons8.com/dusk/64/null/geography--v1.png"
        />
        <h1>Countries in the world</h1>
        <button type="button" onClick={() => dispatch(openModal())}>
          {' '}
          <i className="fa-solid fa-gear" />
        </button>
      </div>
      <div className="main-content">
        <div className="picture-container">
          {selectedContinent
          && selectedContinent !== 'All'
          && continentImages[selectedContinent] ? (
            <img
              className="picture"
              alt={selectedContinent}
              src={continentImages[selectedContinent]}
            />
            ) : (
              <img
                className="picture"
                alt="world map"
                src={continentImages.All}
              />
            )}
        </div>
        <div className="text-conainer-cont">
          {selectedContinent
          && selectedContinent !== 'All'
          && continentData[selectedContinent] ? (
            <p className="continent-text">{continentData[selectedContinent]}</p>
            ) : (
              <p className="continent-text">{continentData.All}</p>
            )}
        </div>
      </div>
      <div className="how-many">
        <h3>{selectedContinent || 'List of countries'}</h3>
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
  align-items: center;
  background-color: white;
  .text-conainer-cont {
    display: none;
  }
  .header {
    display: flex;
    gap: 15px;
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    img {
      width: 60px;
    }
  }
  .picture-container {
    margin-top: 10px;
    width: 280px;
    height: auto;
    border: 5px solid #bababa;
  }
  .picture {
    width: 100%;
    height: 100%;
  }
  .how-many {
    width: 100%;
    margin-top: 10px;
    color: #182734;
    border-bottom: 2px solid #182734;
    padding: 10px;
    text-align: center;
    font-size: 20px;
  }
  .country-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0;
  }
  @media (min-width: 425px) {
    width: 100%;
    .picture-container {
      width: 400px;
      height: auto;
      border: 5px solid #bababa;
    }
  }
  @media (min-width: 768px) {
    .main-content {
      margin-top: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 60px;
      .text-conainer-cont {
        display: flex;
        color: black;
        width: 40%;
        font-size: 17px;
      }
      .picture-container {
        width: 45%;
        border: none;
      }
      .picture {
        width: 100%;
      }
    }
    .country-list {
      padding: 20px;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
    }
  }
  @media (min-width: 1000px) {
    .country-list {
      gap: 50px;
      padding: 50px;
    }
    .header {
      display: flex;
      gap: 15px;
      padding: 20px;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.5px solid grey;
      width: 97%;
      img {
        width: 60px;
      }
      button {
        font-size: 25px;
      }
    }
  }

  @media (min-width: 1440px) {
    .how-many {
      margin-top: 60px;
    }
    .main-content {
      margin-top: 60px;
    }
    .continent-text {
      font-size: 18px;
    }
    .country-list {
      grid-template-columns: repeat(4, 1fr);
      gap: 30px;
      padding: 50px;
    }
  }
`;

export default Home;
