import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Countries from './components/Countries';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
      
            <Route path="/" element={<Countries />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
