import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Paintings from './components/Paintings';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
      
            <Route path="/" element={<Paintings />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
