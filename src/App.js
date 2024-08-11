import React from 'react';
import InteractiveArt from './Pages/InteractiveArt';
import DoggyDogWorld from './Pages/DoggyDogWorld';
import Header from './Components/Header/Header';
import About from './Pages/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <InteractiveArt />
      <DoggyDogWorld />
    </div>
  );
}

export default App;
