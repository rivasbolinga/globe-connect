import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// -- Countries component receiving props from dispatch fetchCountries in HomePage
const Countries = ({ num, flag, name, capital, population, region }) => (
  <Wrapper className="country-card">
    <Link to={`/country/${num}`} className="link">
      <img src={flag.png} alt={flag.alt} className="flag" />
      <div className="text">
        <h2>{name}</h2>
        <p>
          <span>Capital:</span> {/* For the cases where there is not capital */}
          {capital && capital.length > 0 ? capital : 'Has no capital'}
        </p>
        <p>
          {/* cases with not population */}
          <span>Population:</span> {population || 'Ups! nobody leaves here'}
        </p>
        <p>
          <span>Region:</span> {region}
        </p>
      </div>
    </Link>
  </Wrapper>
)
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
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  padding-bottom: 20px;
  .flag {
    width: 100%;
    height: auto;
  }
  .text {
    display: flex;
    flex-direction: column;
    gap:4px
  }
  h2 {
    font-size: 20px;
    color: #363b9d;
    margin: 8px auto 5px auto;
  }
  p {
    font-size: 12px;
  }
}

`

export default Countries;
