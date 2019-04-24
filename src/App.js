import React, { Component } from 'react';
import MetronomeContainer from "./containers/MetronomeContainer";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="metronome-wrapper">
        <h2>Metronome</h2>
        <h3>métron-nómos</h3>
        <div className="metronome-container">
          <MetronomeContainer />
        </div>
      </div>
    );
  }
}

export default App;
