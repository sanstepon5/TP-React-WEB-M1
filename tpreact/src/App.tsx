import React from 'react';
import logo from './logo.svg';
import './App.css';
import BeerList from "./BeerList";

function App() {

    return (
    <div className="App">
        <a href="/about">About this app</a>
      <BeerList/>
    </div>
  );
}

export default App;
