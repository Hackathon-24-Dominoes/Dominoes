import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import StoryPage from "./pages/StoryPage";

import "./App.css";
import React from 'react';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/story" element={<StoryPage />} />
      </Routes>
    </Router>
  )
};

export default App;
