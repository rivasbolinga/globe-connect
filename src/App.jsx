import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Paintings from './components/Paintings';
import './App.css'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/" element={<Paintings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
