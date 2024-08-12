import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InteractiveArt from './Pages/InteractiveArt';
import DoggyDogWorld from './Pages/DoggyDogWorld';
import Header from './Components/Header/Header';
import About from './Pages/About';
import PlanetGenerator from './Pages/PlanetGenerator';
import Nav from './Components/Nav/Nav';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/interactive-art" element={<InteractiveArt />} />
          <Route path="/doggy-dog-world" element={<DoggyDogWorld />} />
          <Route path="/planet-generator" element={<PlanetGenerator />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;