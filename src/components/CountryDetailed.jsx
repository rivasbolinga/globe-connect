import PropTypes from 'prop-types';
import styled from 'styled-components';

const CountryDetailed = ({
  flag,
  name,
  capital,
  population,
  region,
  officialName,
  subregion,
  tld,
  languages,
  currency,
  borders,
  nativeName,
}) => (
  <Wrapper>
    <div className="country-selected">
      <img src={flag.png} alt={flag.alt} className="flag" />
      <h1>{name}</h1>
    </div>
    <div className="country-details-container">
      <h3>Details</h3>
      <div className="country-details">
        <div className="detail">
          <h4>Capital</h4>
          <p>{capital && capital.length > 0 ? capital : 'Has no capital'}</p>
        </div>
        <div className="detail">
          <h4>Region</h4>
          <p>{region}</p>
        </div>
        <div className="detail">
          <h4>Population</h4>
          <p>{population}</p>
        </div>
        <div className="detail">
          <h4>Official name</h4>
          <p>{officialName}</p>
        </div>
        <div className="detail">
          <h4>Subregion</h4>
          <p>{subregion}</p>
        </div>
        <div className="detail">
          <h4>tld</h4>
          <p>{tld}</p>
        </div>
        <div className="detail">
          <h4>Languages</h4>
          {Object.values(languages).map((lang) => (
            <p key={lang}>{lang}</p>
          ))}
        </div>
        {currency && (
        <div className="detail">
          <h4>Currency symbol</h4>
          {Object.values(currency).map((curr) => (
            <p key={curr.name}>{curr.symbol}</p>
          ))}
          <h4>Currency</h4>
          {Object.values(currency).map((curr) => (
            <p key={curr.name}>{curr.name}</p>
          ))}
        </div>
        )}
        {borders && (
        <div className="detail">
          <h4>Borders</h4>
          {Object.values(borders).map((country) => (
            <p key={country}>{country}</p>
          ))}
        </div>
        )}
        <div className="detail">
          <h4>Native common name</h4>
          {Object.values(nativeName).map((native) => (
            <p key={native.common}>{native.common}</p>
          ))}
        </div>
        <div className="detail">
          <h4>Native official name</h4>
          {Object.values(nativeName).map((native) => (
            <p key={native.official}>{native.official}</p>
          ))}
        </div>
      </div>
    </div>
    {' '}
  </Wrapper>
);
CountryDetailed.propTypes = {
  flag: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  name: PropTypes.string.isRequired,
  officialName: PropTypes.string.isRequired,
  capital: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  subregion: PropTypes.string.isRequired,
  tld: PropTypes.string.isRequired,
  currency: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  borders: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  nativeName: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  languages: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
export default CountryDetailed;

const Wrapper = styled.section`
`;
