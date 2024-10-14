// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import CompanyDetail from './components/CompanyDetail';

function App() {
  return (
    <Router>
        <Routes>
          {/* Define the route for the home page */}
          <Route path="/" element={<Home />} />
          <Route path="/company/:id" element={<CompanyDetail />} />
        </Routes>
    </Router>
  );
}

export default App;
