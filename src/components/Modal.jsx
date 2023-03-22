import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeModal, selectSelectedContinent, selectContinent, clearContinent,
} from '../redux/modalSlice';
import { filter } from '../redux/countriesSlice';

const Modal = () => {
  const selectedContinent = useSelector(selectSelectedContinent);
  const dispatch = useDispatch();

  const handleSelectContinent = (continent) => {
    if (continent === 'All') {
      dispatch(clearContinent());
      dispatch(closeModal());
    } else {
      dispatch(selectContinent(continent));
      dispatch(closeModal());
    }
    dispatch(closeModal());
    dispatch(filter());
    dispatch(closeModal());
  };

  return (
    <Wrapper>
      <div>
        <button
          type="button"
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          close
        </button>
        <h2>Select Continent</h2>
        <div className="line" />
        {/* eslint-disable jsx-a11y/label-has-associated-control */}
        <div className="options">
          <div>
            <input
              type="radio"
              value="All"
              id="All"
              checked={!selectedContinent}
              onChange={() => handleSelectContinent('All')}
            />
            <label htmlFor="All">All</label>
          </div>
          <div>
            <input
              type="radio"
              value="Africa"
              id="Africa"
              checked={selectedContinent === 'Africa'}
              onChange={() => handleSelectContinent('Africa')}
            />
            <label htmlFor="Africa">Africa</label>
          </div>
          <div>
            <input
              type="radio"
              value="Asia"
              id="Asia"
              checked={selectedContinent === 'Asia'}
              onChange={() => handleSelectContinent('Asia')}
            />
            <label htmlFor="Asia">Asia</label>
          </div>
          <div>
            <input
              type="radio"
              value="Europe"
              id="Europe"
              checked={selectedContinent === 'Europe'}
              onChange={() => handleSelectContinent('Europe')}
            />
            <label htmlFor="Europe">Europe</label>
          </div>
          <div>
            <input
              type="radio"
              value="North America"
              id="North America"
              checked={selectedContinent === 'North America'}
              onChange={() => handleSelectContinent('North America')}
            />
            <label htmlFor="North America">North America</label>
          </div>
          <div>
            <input
              type="radio"
              value="South America"
              id="South America"
              checked={selectedContinent === 'South America'}
              onChange={() => handleSelectContinent('South America')}
            />
            <label htmlFor="South America">South America</label>
          </div>
          <div>
            <input
              type="radio"
              value="Oceania"
              id="Oceania"
              checked={selectedContinent === 'Oceania'}
              onChange={() => handleSelectContinent('Oceania')}
            />
            <label htmlFor="Oceania">Oceania</label>
          </div>
          <div>
            <input
              type="radio"
              value="Antarctica"
              id="Antarctica"
              checked={selectedContinent === 'Antarctica'}
              onChange={() => handleSelectContinent('Antarctica')}
            />
            <label htmlFor="Antarctica">Antarctica</label>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
width: 90%;
height:90%;
background-color: white;
color:black;
`;

export default Modal;
