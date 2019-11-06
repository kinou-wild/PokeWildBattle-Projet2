import React, { useState, useContext} from 'react';
import axios from 'axios'
import "./fight2.css";
import { FightContext } from './ContextFight';


function Fight2(props) {

    const [pokemons,setPokemons]= useContext(FightContext)

    console.log(pokemons)


    const [dataPokemonPerso, setDataPokemonPerso] = useState({
        stats: [],
        sprites: []
    });

    const [dataPokemonComputer, setDataPokemonComputer] = useState({
        stats: [],
        sprites: []
    });

    return (
        <div className='fightPlace'>



            
            {/* <div className='divFight'>
                <div className='computer'>
                    <div className='statsComputer'>
                        
                    </div>
                    <div>
                        <h1></h1>
                        <img src={''} alt='front' />
                    </div>
                </div>

                <div className='perso'>
                    <div>
                        <h1>{''}</h1>
                        <img src={''} alt='back' />
                    </div>
                    <div className='statsPerso'>
                    
                    </div>
                </div>
            </div>

            <div className='textCombat'>Welcome into Pokemon Battle ! </div> */}

        </div>
    );
    
}

export default Fight2;

