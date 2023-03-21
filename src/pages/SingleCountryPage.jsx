import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchCountries, selectCountries } from '../redux/countriesSlice';
import { Link } from 'react-router-dom';

const SingleCountry = () => {
  const { id } = useParams();
const dispatch = useDispatch();
const countries = useSelector(selectCountries);

useEffect(() => {
  if (!countries.length) {
    dispatch(fetchCountries())
  }
}),
  [dispatch, countries]
  const country = countries.find((country) => country.cca3 === id);
  console.log(country);
return (
  <Wrapper>
    <div className="header">
      <Link to="/" className="link">
        <button>back</button>
      </Link>
      <h2>Country details</h2>
    </div>
    <div className="country-selected">
      <img
        src={country.flags.png}
        alt={country.flags.alt}
        className="flag"
      ></img>
      <h1>{country.name.common}</h1>
    </div>
    <div className="country-details-container">
      <h3>Details</h3>
      <div className="country-details">
        <div className="detail">
          <h4>Capital</h4>
          <p>{country.capital[0]}</p>
        </div>
        <div className="detail">
          <h4>Region</h4>
          <p>{country.region}</p>
        </div>
        <div className="detail">
          <h4>Population</h4>
          <p>{country.population}</p>
        </div>
        <div className="detail">
          <h4>Official name</h4>
          <p>{country.name.official}</p>
        </div>
        <div className="detail">
          <h4>Subregion</h4>
          <p>{country.subregion}</p>
        </div>
        <div className="detail">
          <h4>tld</h4>
          <p>{country.tld[0]}</p>
        </div>
        <div className="detail">
          <h4>Languages</h4>
          <p>{country.capital[0]}</p>
        </div>
        <div className="detail">
          <h4>Capital</h4>
          {Object.values(country.languages)}
        </div>
        <div className="detail">
          <h4>Capital</h4>
          <p>{country.capital[0]}</p>
        </div>
        <div className="detail">
          <h4>Capital</h4>
          <p>{country.capital[0]}</p>
        </div>
      </div>
    </div>
  </Wrapper>
)
}

const Wrapper = styled.section`
`

export default SingleCountry