import styled from 'styled-components'
const Modal = ({ setIsOpen }) => {
  return (
    <Wrapper>
      <div>
        <button type="button" onClick={() => setIsOpen(false)}>
          close
        </button>
        <h2>Select Continent</h2>
        <div className="line"></div>
        <div className="options">
          <div>
            <input type="radio" value="Africa" id="Africa"></input>
            <label for="Africa">Africa</label>
          </div>
          <div>
            <input type="radio" value="Asia" id="Asia"></input>
            <label for="Asia">Asia</label>
          </div>
          <div>
            <input type="radio" value="Europe" id="Europe"></input>
            <label for="Europe">Europe</label>
          </div>
          <div>
            <input type="radio" value="Africa" id="Africa"></input>
            <label for="Africa">Africa</label>
          </div>
          <div>
            <input
              type="radio"
              value="North America"
              id="North America"
            ></input>
            <label for="North America">North America</label>
          </div>
          <div>
            <input
              type="radio"
              value="South America"
              id="South America"
            ></input>
            <label for="South America">South America</label>
          </div>
          <div>
            <input type="radio" value="Oceania" id="Oceania"></input>
            <label for="Oceania">Oceania</label>
          </div>
          <div>
            <input type="radio" value="Antarctica" id="Antarctica"></input>
            <label for="Antarctica">Antarctica</label>
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
