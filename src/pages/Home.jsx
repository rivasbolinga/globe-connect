import React, { useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchCountries, selectCountries } from '../redux/countriesSlice';
import Countries from '../components/Countries';
import Modal from '../components/Modal'

const Home = () => {
  const dispatch = useDispatch()
  const countries = useSelector(selectCountries)
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!countries.length) {
      dispatch(fetchCountries())
    }
  }),
    [dispatch, countries]
  const toggleModal = () => {
    setIsOpen(true)
  }

  return (
    <Wrapper>
      <div>
        <h1>Countries</h1>
        <button type="button" onClick={toggleModal}> settings</button>
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen}/>}

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
