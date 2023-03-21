import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Countries = ({num, flag, name, capital, population,region }) => {
 return (
   <Wrapper className="country-card">
     <Link to={`/country/${num}`} className="link">
       <img src={flag.png} alt={flag.alt} className="flag"></img>
       <h2>{name}</h2>
       <p>
         <span>Capital:</span> {capital}
       </p>
       <p>
         <span>Population:</span> {population}
       </p>
       <p>
         <span>Region:</span> {region}
       </p>
     </Link>
   </Wrapper>
 )
}

const Wrapper = styled.section`
  border: 1px solid;
  .flag {
    width: 200px;
    height: auto;
  }
}

`

export default Countries;
