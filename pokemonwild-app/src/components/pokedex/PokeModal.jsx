import React from 'react';


const PokeModal = ({
    imagePokemonFront,
    imagePokemonBack,
    namePokemon,
    abilitiesPokemon,
    typePokemon,
    taillePokemon,
    moveFight,
    stats,
    weight

}) => {
    return (
        <div>
            <img src={imagePokemonFront} alt='' />
            <img src={imagePokemonBack} alt='' />
            <p>{namePokemon}</p>
            <p>{abilitiesPokemon}</p>
            <p>{typePokemon}</p>
            <p>{taillePokemon}</p>
            <p>{moveFight}</p>
            <p>{stats}</p>
            <p>{weight}</p>
        </div>
    )
}

export default PokeModal;