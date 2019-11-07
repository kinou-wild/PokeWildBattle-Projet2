import React, { useState, useEffect } from 'react';
import axios from 'axios'
import "./fight2.css";
import { moveOne, moveTwo, moveThree, moveFour } from '../pokedex/PokeModal'
// console.log(moveOne)
// console.log(moveTwo)
// console.log(moveThree)
// console.log(moveFour)

function Fight2(props) {
    const params = props.match.params;


    const [hpComputer, setHpComputer] = useState()
    const [dataPokemonPerso, setDataPokemonPerso] = useState({
        stats: [{}],
        sprites: [],
        moves: [{
            move: {}
        }]
    });

    const [dataPokemonComputer, setDataPokemonComputer] = useState({
        stats: [],
        sprites: [],
        moves: []
    });

    

    useEffect(() => {
        getPokemonPerso()

    }, [])

    useEffect(() => {
        getPokemonComputer()
    }, [])

    const getPokemonPerso =  () => {
         axios.get(`https://pokeapi.co/api/v2/pokemon/${params.idperso}`)
            .then(res => setDataPokemonPerso(res.data))
    }

    const getPokemonComputer = () => {
         axios.get(`https://pokeapi.co/api/v2/pokemon/${params.idcomputer}`)
            .then(res =>{ setDataPokemonComputer(res.data)
            setHpComputer(res.data.stats[5].base_stat)})
         
    }


    // ////////////////////////////API attaques pokemon perso////////
    const [DataAttPerso1, setDataAttPerso1] = useState({
        power: []
    })
    const [DataAttPerso2, setDataAttPerso2] = useState({
        power: []
    })
    const [DataAttPerso3, setDataAttPerso3] = useState({
        power: []
    })
    const [DataAttPerso4, setDataAttPerso4] = useState({
        power: []
    })
    const getAttPerso1 = async (url) => {
        await axios.get(url)
            .then(res => setDataAttPerso1(res.data))
    }


    const getAttPerso2 = async (url) => {
        await axios.get(url)
            .then(res => setDataAttPerso2(res.data))
    }


    const getAttPerso3 = async (url) => {
        await axios.get(url)
            .then(res => setDataAttPerso3(res.data))
    }




    const getAttPerso4 = async (url) => {
        await axios.get(url)
            .then(res => setDataAttPerso4(res.data))
    }




    useEffect(() => {
        const url1= dataPokemonPerso.moves[moveOne%dataPokemonPerso.moves.length].move.url
        const url2= dataPokemonPerso.moves[moveTwo%dataPokemonPerso.moves.length].move.url
        const url3= dataPokemonPerso.moves[moveThree%dataPokemonPerso.moves.length].move.url
        const url4= dataPokemonPerso.moves[moveFour%dataPokemonPerso.moves.length].move.url
console.log(`URL 1 = ${url1}`)
console.log(`URL 2 = ${url2}`)
console.log(`URL 3 = ${url3}`)
console.log(`URL 4 = ${url4}`)


        getAttPerso1(url1)
        getAttPerso2(url2)
        getAttPerso3(url3)
        getAttPerso4(url4)
    }, [dataPokemonPerso])




    ////////////////////////////////////

    const pokemonPersoArrayStats = [dataPokemonPerso.stats.map(x => x.base_stat)]
    const pokemonComputerArrayStats = [dataPokemonComputer.stats.map(x => x.base_stat)]

    //////////////////////////Algo perso/////////////////////////

        /////////////////////////////////////////////////////////

    //le state qui contient les hp du computeur que l'on va venir diminuer 


console.log(pokemonComputerArrayStats[0][5])
console.log(hpComputer)


    /////////////////////
    const algoPersoAtt1 = () => {
        const level = (2 * 20 / 5) + 2
        const power = DataAttPerso1.power
        const def = pokemonPersoArrayStats[0][3]
        const att = pokemonPersoArrayStats[0][4]
        const random = Math.random() * (1 - 0.85) + 0.85
        const finish1 = (((level * power * (att / def)) / 50) + 2) * random
        return finish1
    }
    const algoPersoAtt2 = () => {
        const level = (2 * 20 / 5) + 2
        const power = DataAttPerso2.power
        const def = pokemonPersoArrayStats[0][3]
        const att = pokemonPersoArrayStats[0][4]
        const random = Math.random() * (1 - 0.85) + 0.85
        const finish2 = (((level * power * (att / def)) / 50) + 2) * random
        return finish2
    }

    const algoPersoAtt3 = () => {
        const level = (2 * 20 / 5) + 2
        const power = DataAttPerso3.power
        const def = pokemonPersoArrayStats[0][3]
        const att = pokemonPersoArrayStats[0][4]
        const random = Math.random() * (1 - 0.85) + 0.85
        const finish3 = (((level * power * (att / def)) / 50) + 2) * random
        return finish3
    }
    const algoPersoAtt4 = () => {
        const level = (2 * 20 / 5) + 2
        const power = DataAttPerso4.power
        const def = pokemonPersoArrayStats[0][3]
        const att = pokemonPersoArrayStats[0][4]
        const random = Math.random() * (1 - 0.85) + 0.85
        const finish4 = Math.round((((level * power * (att / def)) / 50) + 2) * random)
        console.log(finish4)
        setHpComputer(hpComputer- finish4)
    }
    console.log(hpComputer)


    const test = Number(pokemonComputerArrayStats[0][5])

    const [hpComputer, setHpComputer] = useState(test)

    { console.log(hpComputer) }


    /////////////////////
    return (

        <div className='fightPlace'>
        <button onClick={() => algoPersoAtt4()}>aaaaa</button>
        {hpComputer}
        
            <div className='divFight'>
                <div className='computer'>
                    <div className='statsComputer'>

                    </div>
                    <div>
                        <h1>{dataPokemonComputer.name}</h1>
                        <p>HP :{hpComputer}</p>
                        <img src={dataPokemonComputer.sprites.front_default} alt='front' />
                    </div>
                </div>

                <div className='perso'>
                    <div>
                        <h1>{dataPokemonPerso.name}</h1>
                        <p>HP :{pokemonPersoArrayStats[0][5]}</p>

                        <img src={dataPokemonPerso.sprites.back_default} alt='back' />
                    </div>
                    <div className='statsPerso'>
                        <p>{DataAttPerso1.name}</p>
                        <p>{DataAttPerso2.name}</p>
                        <p>{DataAttPerso3.name}</p>
                        <p>{DataAttPerso4.name}</p>



                    </div>
                </div>
            </div>

            <div className='textCombat'>Welcome into Pokemon Battle ! {dataPokemonPerso.name} VS {dataPokemonComputer.name}<br></br></div>

        </div>
    );

}

export default Fight2;