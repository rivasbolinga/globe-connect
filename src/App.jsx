import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleCountry from './pages/SingleCountryPage'
import Countries from './components/Countries';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="country/:id" element={<SingleCountry />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
