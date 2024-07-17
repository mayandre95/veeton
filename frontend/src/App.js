import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import SessionPage from './Pages/SessionPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/session" element={<SessionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
