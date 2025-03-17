import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Footer from './components/Footer';
import './styles/global.css';
import Page1 from "./Page1"
import Page2 from "./Page2"

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/sr" element={<Page2 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
