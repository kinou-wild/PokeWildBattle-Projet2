import React from 'react';
import './Pokedex.css';
import Pokemons from './Pokemons'
import Footer from '../Footer/Footer'

class Pokedex extends React.Component {

    render() {
        return (
            <div className="pokedexPage">
                <Pokemons />
            </div>
        )

    }
}

export default Pokedex;
