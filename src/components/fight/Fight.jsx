import React, { useState, useEffect } from 'react';
import axios from 'axios'
import "./Fight.css";


function Fight(props) {
    const params = props.match.params;


    const [dataPokemonPerso, setDataPokemonPerso] = useState({
        stats: [],
        sprites:[]
    });

    const [dataPokemonComputer, setDataPokemonComputer] = useState({
        stats: [],
        sprites: []
    });


    useEffect(()=>{
        getPokemonPerso()
    },[])

    useEffect(() => {
        getPokemonComputer()
    }, [])

    const getPokemonPerso = async()=>{
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.idperso}`)
        .then(res=>setDataPokemonPerso(res.data))
    }

    const getPokemonComputer = async () => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.idcomputer}`)
            .then(res => setDataPokemonComputer(res.data))
    }

    
  

    return (
        <div>
            
        <div>
            <h1>Pokemon perso :</h1>
            <p>{dataPokemonPerso.name}</p>
            <img src={dataPokemonPerso.sprites.front_default} alt='front'/>
            <img src={dataPokemonPerso.sprites.back_default} alt='back' />

            {dataPokemonPerso.stats.map((x,y)=><p key={y}>{`${x.stat.name} : ${x.base_stat}`}</p>)}


        </div>
         <div>
            <h1>Pokemon computer :</h1>
            <p>{dataPokemonComputer.name}</p>
            <img src={dataPokemonComputer.sprites.front_default} alt='front'/>
            <img src={dataPokemonComputer.sprites.back_default} alt='back' />

            {dataPokemonComputer.stats.map((x,y)=><p key={y}>{`${x.stat.name} : ${x.base_stat}`}</p>)}


        </div>
        </div>
);
    }

export default Fight;