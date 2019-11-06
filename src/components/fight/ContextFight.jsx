import React, { useState, createContext,useEffect} from 'react';
import axios from 'axios'
{ console.log('hihi') }

export const FightContext = createContext()

export const FightController = (props)=>{

    const [dataPokemon, setDataPokemon] = useState({});

    useEffect(() => {
        const getPokemon = async () => {
            const result = await axios(`https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151`);
            setDataPokemon(result.data)
        }
        getPokemon()
    }, [])


    

    return(
        <FightContext.Provider value={[dataPokemon,setDataPokemon]}>
                {props.children}
        </FightContext.Provider>

    )

    
}

