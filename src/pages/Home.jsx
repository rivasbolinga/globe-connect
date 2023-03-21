import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchCountries, selectCountries } from '../redux/countriesSlice';
import Countries from '../components/Countries';
import { openModal } from '../redux/modalSlice';
const Home = () => {
  const dispatch = useDispatch()
  const countries = useSelector(selectCountries)


  useEffect(() => {
    if (!countries.length) {
      dispatch(fetchCountries())
    }
  }),
    [dispatch, countries]
  
  return (
    <Wrapper>
      <div>
        <h1>Countries</h1>
        <button type="button" onClick={()=>dispatch(openModal())}> settings</button>
      </div>
      {countries.map((country) => (
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
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  .country-card {
    border: 1px solid;
    .flag {
      width: 200px;
      height: auto;
    }
  }
`

export default Home;
