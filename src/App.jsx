import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleCountry from './pages/SingleCountryPage';
import Home from './pages/Home';
import './App.css';
import Overlay from './components/Overlay';
import { closeModal } from './redux/modalSlice';

function App() {
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="country/:id" element={<SingleCountry />} />
        </Routes>
      </BrowserRouter>
      {isOpen && (
        <>
          <Overlay isOpen={isOpen} onClose={handleCloseModal} />
        </>
      )}
    </div>
  );
}
export default App;
