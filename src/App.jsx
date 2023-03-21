import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleCountry from './pages/SingleCountryPage'
import Home from './pages/Home';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="country/:id" element={<SingleCountry />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
