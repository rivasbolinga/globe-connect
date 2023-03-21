import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components'
import { fetchCountries, selectCountries } from '../redux/countriesSlice';

const Paintings = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);
 
  useEffect(()=> {
    if(!countries.length) {
      dispatch(fetchCountries())
    }
  }), [dispatch, countries];
 console.log(countries)
  return (
  <Wrapper >
    {countries.map((country)=> {
    return (
      <div className="country-card" key={country.cca3}>
        <img
          src={country.flags.png}
          alt={country.flag.alt}
          className="flag"
        ></img>
        <h2>{country.name.common}</h2>
        <p>
          <span>Capital:</span> {country.capital}
        </p>
        <p>
          <span>Population:</span> {country.population}
        </p>
        <p>
          <span>Region:</span> {country.region}
        </p>
      </div>
    )
  })}
  </Wrapper>
  )
}

const Wrapper = styled.section`
display:grid;
grid-template-columns: repeat(2, 1fr);
.country-card {
  border: 1px solid;
  .flag {
    width: 200px;
    height: auto;
  }
}

`

export default Paintings;
