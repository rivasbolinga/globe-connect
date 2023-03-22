import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleCountry from './pages/SingleCountryPage';
import Home from './pages/Home';
import './App.css';
import Modal from './components/Modal';

function App() {
  const { isOpen } = useSelector((state) => state.modal);
  return (
    <div className="App">
      {isOpen && <Modal />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="country/:id" element={<SingleCountry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
