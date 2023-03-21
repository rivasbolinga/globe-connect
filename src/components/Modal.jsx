import styled from 'styled-components';
import { closeModal } from '../redux/modalSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectSelectedContinent,selectContinent } from '../redux/modalSlice';

const Modal = () => {
   const selectedContinent = useSelector(selectSelectedContinent)
   const dispatch = useDispatch()

   const handleSelectContinent = (continent) => {
     dispatch(selectContinent(continent))
   }

  return (
    <Wrapper>
      <div>
        <button
          type="button"
          onClick={() => {
            dispatch(closeModal())
          }}
        >
          close
        </button>
        <h2>Select Continent</h2>
        <div className="line"></div>
        <div className="options">
          <div>
            <input type="radio" value="Africa" id="Africa"></input>
            <label htmlFor="Africa">Africa</label>
          </div>
          <div>
            <input type="radio" value="Asia" id="Asia"></input>
            <label htmlFor="Asia">Asia</label>
          </div>
          <div>
            <input type="radio" value="Europe" id="Europe"></input>
            <label htmlFor="Europe">Europe</label>
          </div>
          <div>
            <input type="radio" value="Africa" id="Africa"></input>
            <label htmlFor="Africa">Africa</label>
          </div>
          <div>
            <input
              type="radio"
              value="North America"
              id="North America"
            ></input>
            <label htmlFor="North America">North America</label>
          </div>
          <div>
            <input
              type="radio"
              value="South America"
              id="South America"
            ></input>
            <label htmlFor="South America">South America</label>
          </div>
          <div>
            <input type="radio" value="Oceania" id="Oceania"></input>
            <label htmlFor="Oceania">Oceania</label>
          </div>
          <div>
            <input type="radio" value="Antarctica" id="Antarctica"></input>
            <label htmlFor="Antarctica">Antarctica</label>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
width: 90%;
height:90%;
background-color: white;
`

export default Modal