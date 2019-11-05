import React from 'react';
import Particle from '../Particle';
import Pokedex from './pokedex/Pokedex'
import Footer from './Footer/Footer'

class HomePokedex extends React.Component {
    
    render() {
        return (
            <div >
                <Particle />
                <Pokedex />
                <Footer />
            </div>

        );
    }
}

export default HomePokedex;