import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleCountry from './pages/SingleCountryPage';
import Home from './pages/Home';
import './App.css';
import Overlay from './components/Overlay';

function App() {
  // -- isOpen  from modalSlice to use with Overlay.
  const { isOpen } = useSelector((state) => state.modal);
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
          <Overlay />
        </>
      )}
    </div>
  );
}
export default App;
