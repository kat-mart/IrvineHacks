import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Report from './components/Report';
import Symptom from './components/Symptom';

function App() {
  const [reports, setReports] = useState([]);
  
  return (
    <div>
        <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/Report' element={<Report reports={reports} setReports={setReports} />} />
          </Routes>
    </div>
  );
}

export default App;
