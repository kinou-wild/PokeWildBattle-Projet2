import React from 'react';
import Particle from '../Particle';
import Pokedex from './pokedex/Pokedex'

class Home extends React.Component {
    
    render() {
        return (
            <div >
                <Particle />
                <Pokedex />
            </div>

        );
    }
}

export default Home;