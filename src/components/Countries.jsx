import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries, selectCountries } from '../redux/countriesSlice';

const Paintings = () => {
  const dispatch = useDispatch();
  const countries = useSelector(selectCountries);
 
  useEffect(()=> {
    if(!countries.length) {
      dispatch(fetchCountries())
    }
  }), [dispatch, countries];
 console.log(countries)
  return (
  <div>
    {countries.map((country)=> {
    return (
      <div>
        <h2>Country</h2>
    
      </div>
    )
  })}
  </div>
  )
}
export default Paintings;
