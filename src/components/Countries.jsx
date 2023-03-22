import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Countries = ({ num, flag, name, capital, population, region }) => (
  <Wrapper className="country-card">
    <Link to={`/country/${num}`} className="link">
      <img src={flag.png} className="flag" />
      <h2>{name}</h2>
      <p>
        <span>Capital:</span>{' '}
        {capital && capital.length > 0 ? capital : 'Has no capital'}
      </p>
      <p>
        <span>Population:</span>{' '}
        {population ? population : 'Ups! nobody leaves here'}
      </p>
      <p>
        <span>Region:</span> {region}
      </p>
    </Link>
  </Wrapper>
)

Countries.propTypes = {
  num: PropTypes.string.isRequired,
  flag: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  capital: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
}

const Wrapper = styled.section`
  border: 1px solid;
  .flag {
    width: 200px;
    height: auto;
  }
}

`;

export default Countries;
