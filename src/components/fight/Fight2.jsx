import React, { useState, useEffect } from 'react';
import axios from 'axios'
import "./fight2.css";



function Fight2(props) {
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
        console.log(dataPokemonPerso)
    }

    const getPokemonComputer = async () => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.idcomputer}`)
            .then(res => setDataPokemonComputer(res.data))
        console.log(dataPokemonComputer)
    }

    const pokemonPersoArrayStats = [dataPokemonPerso.stats.map(x => x.base_stat)]
    const pokemonComputerArrayStats = [dataPokemonComputer.stats.map(x => x.base_stat)]
    const pokemonPersoResults = (pokemonPersoArrayStats[0][0] + pokemonPersoArrayStats[0][1] + pokemonPersoArrayStats[0][2] + pokemonPersoArrayStats[0][3] + pokemonPersoArrayStats[0][4] + pokemonPersoArrayStats[0][5])
    const pokemonComputerResults = (pokemonComputerArrayStats[0][0] + pokemonComputerArrayStats[0][1] + pokemonComputerArrayStats[0][2] + pokemonComputerArrayStats[0][3] + pokemonComputerArrayStats[0][4] + pokemonComputerArrayStats[0][5])


    return (
        <div className='fightPlace'>
            <div className='divFight'>
                <div className='computer'>
                    <div className='statsComputer'>
                        {dataPokemonComputer.stats.map((x, y) => <p key={y}>{`${x.stat.name} : ${x.base_stat}`}</p>)}
                    </div>
                    <div>
                        <h1>{dataPokemonComputer.name}</h1>
                        <img src={dataPokemonComputer.sprites.front_default} alt='front' />
                    </div>
                </div>

                <div className='perso'>
                    <div>
                        <h1>{dataPokemonPerso.name}</h1>
                        <img src={dataPokemonPerso.sprites.back_default} alt='back' />
                    </div>
                    <div className='statsPerso'>
                        {dataPokemonPerso.stats.map((x, y) => <p key={y}>{`${x.stat.name} : ${x.base_stat} `}</p>)}
                    </div>
                </div>
            </div>

            <div className='textCombat'>Welcome into Pokemon Battle ! {dataPokemonPerso.name} VS {dataPokemonComputer.name}<br></br></div>

        </div>
    );
}

export default Fight2;