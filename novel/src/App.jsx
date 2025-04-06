// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/login';
import Chapter1 from './components/Chapter1'
import Chapter2 from './components/Chapter2';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/c1" element={<Chapter1 />} />
        <Route path="/c2" element={<Chapter2 />} />
      </Routes>
    </Router>
  );
}

export default App;
