import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InteractiveArt from './Pages/InteractiveArt';
import DoggyDogWorld from './Pages/DoggyDogWorld';
import Header from './Components/Header/Header';
import About from './Pages/About';
import PlanetGenerator from './Pages/PlanetGenerator';
import Nav from './Components/Nav/Nav';
import ColorUpdater from './Components/ColourSwitch/ColourSwitch';
import './App.css';

function App() {
  return (
    <div className="App">
    <Router>
      <ColorUpdater />
      <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/interactive-art" element={<InteractiveArt />} />
          <Route path="/doggy-dog-world" element={<DoggyDogWorld />} />
          <Route path="/planet-generator" element={<PlanetGenerator />} />
        </Routes>
    </Router>
    </div>
  );
}

export default App;