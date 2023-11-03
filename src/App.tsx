import React from 'react';
import { Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import PrintCards from './pages/PrintCards';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/print" element={<PrintCards />} />
      </Routes>
    </>
  );
};

export default App;
