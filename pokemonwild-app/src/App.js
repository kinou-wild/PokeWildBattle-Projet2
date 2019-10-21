import React from 'react';
import './App.css';
import Particle from './Particle';
import Pokedex from './components/pokedex/Pokedex'

class App extends React.Component {

  render() {
    return (
      <>
        <Particle />
          <Pokedex />
      </>
    )
  }
}
export default App;
