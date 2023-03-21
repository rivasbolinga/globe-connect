import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchCountries, selectCountries } from '../redux/countriesSlice';

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
    <div className='header'>
      <button>back</button>
      <h2>Country details</h2>
    </div>
    <div className='country-details-container'>
      <h3>Details</h3>
      <div className='country-details'>
        <div className='detail'>
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