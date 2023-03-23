import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  closeModal, selectSelectedContinent, selectContinent, clearContinent,
} from '../redux/modalSlice';
import { filter } from '../redux/countriesSlice';

const Modal = () => {
  const selectedContinent = useSelector(selectSelectedContinent);
  const dispatch = useDispatch();
  // -- If continent selected is all, clear continent (in case there was one selected)
  // Rest of selections, we dispatch selectContinent from redux slice and close modal.
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
          <i className="fa-solid fa-xmark" />
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
  width: 92%;
  height: 325px;
  border-radius: 10px;
  border: 4px solid white;
  background-color: white;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #535bf2;
  padding: 10px;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/World_Map_Blank.svg/1600px-World_Map_Blank.svg.png');
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: 130px;
  transform: translate(-50%, -50%);
   button {
    color: white;
    background: none;
  }
  .line {
    height: 2px;
    background-color: white;
  }
  .options {
    margin-top: 10px;
  }
  @media (min-width:768px) {
    width: 400px;
  }
`;

export default Modal;
