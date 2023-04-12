import React from 'react';
import {
  Routes, Route,
} from 'react-router-dom';
import './styles/App.scss';
import Header from './components/Header';
import Missions from './components/Missions';
import Rockets from './components/Rockets';
import Dragons from './components/Dragons';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="border-line"> </div>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<Rockets />} />
          <Route path="/Missions" element={<Missions />} />
          <Route path="/Dragons" element={<Dragons />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
