import React from 'react';
import logo from './logo.svg';
import './App.css';
import BeerList from "./BeerList";

function App() {
  return (
    <div className="App">
      <BeerList beers={["beer1", "beer2"]} />
    </div>
  );
}

export default App;
