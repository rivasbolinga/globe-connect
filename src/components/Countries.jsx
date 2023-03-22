import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// -- Countries component receiving props from dispatch fetchCountries in HomePage
const Countries = ({
  num, flag, name, capital, population, region,
}) => (
  <Wrapper className="country-card">
    <Link to={`/country/${num}`} className="link">
      <img src={flag.png} alt={flag.alt} className="flag" />
      <h2>{name}</h2>
      <p>
        <span>Capital:</span>
        {' '}
        {/* For the cases where there is not capital */}
        {capital && capital.length > 0 ? capital : 'Has no capital'}
      </p>
      <p>
        {/* cases with not population */}
        <span>Population:</span>
        {' '}
        {population || 'Ups! nobody leaves here'}
      </p>
      <p>
        <span>Region:</span>
        {' '}
        {region}
      </p>
    </Link>
  </Wrapper>
);
// use of oneOfType because capital can come as sting or array (or not  capital at all).
Countries.propTypes = {
  num: PropTypes.string.isRequired,
  flag: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
  name: PropTypes.string.isRequired,
  capital: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
};

Countries.defaultProps = {
  capital: 'No capital',
};

const Wrapper = styled.section`
  border: 1px solid;
  .flag {
    width: 200px;
    height: auto;
  }
}

`;

export default Countries;
