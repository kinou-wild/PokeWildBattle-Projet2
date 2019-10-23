import React from 'react';
import "./Pokelist.css"

const Pokelist = ({ card }) => {

    return (
        <>


            <div className="pokeListDiv">
                <div className="center">
                    {card.map((x, y) =>
                        <div className="pokeCard" key={y}>
                            <img className="pokeImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${y + 1}.png`} alt='' />
                            <hr className="cardHr"></hr>
                            <p className="pokeName">{x.name}</p>
                        </div>
                            )
                    }
                </div>
            </div>


        </>

    )


}

export default Pokelist;