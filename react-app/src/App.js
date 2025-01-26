import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Report from './components/Report';
import Symptom from './components/Symptom';
import Profile from './components/Profile';
import HealthTool from './components/HealthTool';

function App() {
  const [reports, setReports] = useState([]);
  
  return (
    <div>
        <Navbar />
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/Home' element={<Home />} />
              <Route path='/Report' element={<Report reports={reports} setReports={setReports} />} />
              <Route path='/Symptom' element={<Symptom />}/>
              <Route path='/Profile' element={<Profile />}/>
              <Route path='/HealthTool' element={<HealthTool />}/>
          </Routes>
    </div>
  );
}

export default App;
