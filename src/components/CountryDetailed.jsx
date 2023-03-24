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
          <div className="borders">
            {Object.values(languages).map((lang) => (
              <p className="borders-text" key={lang}>
                {lang}
              </p>
            ))}
          </div>
        </div>
        {currency && (
          <div className="detail">
            <h4>Currency symbol</h4>
            <div className="borders">
              {Object.values(currency).map((curr) => (
                <p className="borders-text" key={curr.name}>{curr.symbol}</p>
              ))}
            </div>
          </div>
        )}
        {currency && (
          <div className="detail">
            <h4>Currency</h4>
            <div className="borders">
              {Object.values(currency).map((curr) => (
                <p className="borders-text" key={curr.name}>
                  {curr.name}
                </p>
              ))}
            </div>
          </div>
        )}
        {borders && (
          <div className="detail">
            <h4>Borders</h4>
            <div className="borders">
              {Object.values(borders).map((country) => (
                <p className="borders-text" key={country}>{country}</p>
              ))}
            </div>
          </div>
        )}
        <div className="detail">
          <h4>Native common name</h4>
          <div className="borders">
            {Object.values(nativeName).map((native) => (
              <p className="borders-text" key={native.common}>
                {native.common}
              </p>
            ))}
          </div>
        </div>
        <div className="detail">
          <h4>Native official name</h4>
          <div className="borders">
            {Object.values(nativeName).map((native) => (
              <p className="borders-text" key={native.official}>
                {native.official}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
    {' '}
  </Wrapper>
);
CountryDetailed.defaultProps = {
  capital: '',
  currency: '',
  borders: '',
  nativeName: '',
  languages: '',
};

CountryDetailed.propTypes = {
  flag: PropTypes.PropTypes.oneOfType([PropTypes.string, PropTypes.object])
    .isRequired,
  name: PropTypes.string.isRequired,
  officialName: PropTypes.string.isRequired,
  capital: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
  subregion: PropTypes.string.isRequired,
  tld: PropTypes.string.isRequired,
  currency: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string,
    PropTypes.array,
  ]),
  borders: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
  nativeName: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
  languages: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
    PropTypes.string,
  ]),
};
export default CountryDetailed;

const Wrapper = styled.section`
  background-color: white;
  color: #192a38;
  width: 100%;
  h1 {
    padding: 20px 10px 20px 10px;
    font-size: 25px;
    color: #192a38;
    border-bottom: 1px solid  #192a38;
    text-align: center;
  }
  .flag {
    width: 100%;
  }
  .detail {
    display: flex;
    padding: 20px 10px 20px 10px;
    justify-content: space-between;
    justify-content; center;
    align-items: center;
    border-bottom: 0.6px solid grey;
    h4 {
      width: 40%;
      font-size: 20px;
    }
    p {
      width: 30%;
      text-align: center;
    }
    .borders {
      width: 30%;
      text-align: center;
    }
    .borders-text {
      width: 100%;
    }
  }
 @media (min-width: 768px) {
  .country-selected {
    display: flex;
    gap: 30px;
    align-items: center;
    padding: 20px;
  }
   .flag {
    width: 60%;
  }
   h1 {
      font-size: 30px;
      border: none;
    }
    .detail {
    justify-content: space-around;
    justify-content; center;
    align-items: center;
    h4 {
      width: 40%;
      font-size: 20px;
    }
    p {
      width: 30%;
      text-align: center;
    }
 }
`;
