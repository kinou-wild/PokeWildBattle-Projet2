import React from 'react';
import './Pokedex.css';
import PokeList from './PokeList'


class Pokedex extends React.Component {

    render() {

        return (
            <div className="pokedexPage">
               <PokeList />      
            </div>
        )

    }
}

export default Pokedex;
