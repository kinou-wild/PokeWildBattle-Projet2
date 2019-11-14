import React from 'react';
import Particle from '../Particle';
import Pokedex from './pokedex/Pokedex'


class HomePokedex extends React.Component {
    
    render() {
        return (
            <div >
                <Particle />
                <Pokedex />
            </div>

        );
    }
}

export default HomePokedex;