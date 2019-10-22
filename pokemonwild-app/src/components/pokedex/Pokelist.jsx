import React from 'react';
import "./Pokelist.css"

const Pokelist = ({ card }) => {

    return (
        <>


            <div className="pokeListDiv">
                <div className="center">
                    {card.map((x, y) =>
                        <div className="pokeCard" key={y}>
                            <img className="imgsPos" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${y + 1}.png`} alt='' />
                            <hr></hr>
                            <p>{x.name}</p>
                        </div>
                            )
                    }
                </div>
            </div>


        </>

    )


}

export default Pokelist;