import React, { useState, useEffect } from 'react';
import axios from 'axios'
import "./Fight.css";



function Fight(props) {
    const params = props.match.params;


    const [dataPokemonPerso, setDataPokemonPerso] = useState({
        stats: [],
        sprites: []
    });

    const [dataPokemonComputer, setDataPokemonComputer] = useState({
        stats: [],
        sprites: []
    });


    useEffect(() => {
        getPokemonPerso()
    }, [])

    useEffect(() => {
        getPokemonComputer()
    }, [])

    const getPokemonPerso = async () => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.idperso}`)
            .then(res => setDataPokemonPerso(res.data))
    }

    const getPokemonComputer = async () => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.idcomputer}`)
            .then(res => setDataPokemonComputer(res.data))
    }




    return (
        <div className='fightPlace'>
            <div className='divFight'>
                <div className='computer'>
                    <div className='statsComputer'>
                        {dataPokemonComputer.stats.map((x, y) => <p key={y}>{`${x.stat.name} : ${x.base_stat}`}</p>)}
                    </div>
                    <div>
                        <h1>{dataPokemonComputer.name}</h1>
                        <img src={dataPokemonComputer.sprites.front_default} alt='image front' />
                    </div>
                </div>

                <div className='perso'>
                    <div>
                        <h1>{dataPokemonPerso.name}</h1>
                        <img src={dataPokemonPerso.sprites.back_default} alt='image back' />
                    </div>
                    <div className='statsPerso'>
                        {dataPokemonPerso.stats.map((x, y) => <p key={y}>{`${x.stat.name} : ${x.base_stat} `}</p>)}
                    </div>
                </div>
            </div>
            <div className='textCombat'>traaaaaalala</div>

        </div>
    );
}

export default Fight;