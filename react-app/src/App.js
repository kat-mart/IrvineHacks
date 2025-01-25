import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Report from './components/Report';

function App() {
  return (
    <div>
        <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/Report' element={<Report />} />
          </Routes>
    </div>
  );
}

export default App;
