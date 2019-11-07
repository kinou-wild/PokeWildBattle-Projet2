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
        moves: [ {
            move:{}
        }]
    });

    

    useEffect(() => {
        getPokemonPerso()

    }, [])

    useEffect(() => {
        getPokemonComputer()
    }, [])

    const getPokemonPerso =  () => {
         axios.get(`https://pokeapi.co/api/v2/pokemon/${params.idperso}`)
            .then(res => {setDataPokemonPerso(res.data)
            setHpComputer(res.data.stats[5].base_stat)})
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
    const getAttPerso1 = (url) => {
        axios.get(url)
            .then(res => setDataAttPerso1(res.data))
    }


    const getAttPerso2 = (url) => {
        axios.get(url)
            .then(res => setDataAttPerso2(res.data))
    }


    const getAttPerso3 = (url) => {
        axios.get(url)
            .then(res => setDataAttPerso3(res.data))
    }




    const getAttPerso4 =  (url) => {
         axios.get(url)
            .then(res => setDataAttPerso4(res.data))
    }




    useEffect(() => {
        const url1= dataPokemonPerso.moves[moveOne%dataPokemonPerso.moves.length].move.url
        const url2= dataPokemonPerso.moves[moveTwo%dataPokemonPerso.moves.length].move.url
        const url3= dataPokemonPerso.moves[moveThree%dataPokemonPerso.moves.length].move.url
        const url4= dataPokemonPerso.moves[moveFour%dataPokemonPerso.moves.length].move.url
        getAttPerso1(url1)
        getAttPerso2(url2)
        getAttPerso3(url3)
        getAttPerso4(url4)
    }, [dataPokemonPerso])
///////////////////////////////////////////
const [hpPerso, setHpPerso] = useState()


// ////////////////////////////API attaques pokemon computer ////////
const [DataAttComputer1, setDataAttComputer1] = useState({
    power: []
})
const [DataAttComputer2, setDataAttComputer2] = useState({
    power: []
})
const [DataAttComputer3, setDataAttComputer3] = useState({
    power: []
})
const [DataAttComputer4, setDataAttComputer4] = useState({
    power: []
})
const getAttComputer1 = (url) => {
    axios.get(url)
        .then(res => setDataAttComputer1(res.data))
}


const getAttComputer2 = (url) => {
    axios.get(url)
        .then(res => setDataAttComputer2(res.data))
}


const getAttComputer3 = (url) => {
    axios.get(url)
        .then(res => setDataAttComputer3(res.data))
}




const getAttComputer4 =  (url) => {
     axios.get(url)
        .then(res => setDataAttComputer4(res.data))
}




useEffect(() => {
    const urlComp1= dataPokemonComputer.moves[moveOne%dataPokemonComputer.moves.length].move.url
    const urlComp2= dataPokemonComputer.moves[moveTwo%dataPokemonComputer.moves.length].move.url
    const urlComp3= dataPokemonComputer.moves[moveThree%dataPokemonComputer.moves.length].move.url
    const urlComp4= dataPokemonComputer.moves[moveFour%dataPokemonComputer.moves.length].move.url
    
    getAttComputer1(urlComp1)
    getAttComputer2(urlComp2)
    getAttComputer3(urlComp3)
    getAttComputer4(urlComp4)
}, [dataPokemonComputer])



    ////////////////////////////////////

    const pokemonPersoArrayStats = [dataPokemonPerso.stats.map(x => x.base_stat)]
    const pokemonComputerArrayStats = [dataPokemonComputer.stats.map(x => x.base_stat)]

    //////////////////////////Algo perso/////////////////////////
    const algoComputerAtt1 = () => {
        const level = (2 * 20 / 5) + 2
        const power = DataAttComputer1.power
        const def = pokemonComputerArrayStats[0][3]
        const att = pokemonComputerArrayStats[0][4]
        const random = Math.random() * (1 - 0.85) + 0.85
        const finish1 = (((level * power * (att / def)) / 50) + 2) * random
        setHpPerso(hpPerso- finish1)  }

    const algoComputerAtt2 = () => {
        const level = (2 * 20 / 5) + 2
        const power = DataAttComputer2.power
        const def = pokemonComputerArrayStats[0][3]
        const att = pokemonComputerArrayStats[0][4]
        const random = Math.random() * (1 - 0.85) + 0.85
        const finish2 = (((level * power * (att / def)) / 50) + 2) * random
        setHpPerso(hpPerso- finish2)

    }

    const algoComputerAtt3 = () => {
        const level = (2 * 20 / 5) + 2
        const power = DataAttComputer3.power
        const def = pokemonComputerArrayStats[0][3]
        const att = pokemonComputerArrayStats[0][4]
        const random = Math.random() * (1 - 0.85) + 0.85
        const finish3 = Math.round((((level * power * (att / def)) / 50) + 2) * random)
        setHpPerso(hpPerso - finish3)

    }
    const algoComputerAtt4 = () => {
        const level = (2 * 20 / 5) + 2
        const power = DataAttComputer4.power
        const def = pokemonComputerArrayStats[0][3]
        const att = pokemonComputerArrayStats[0][4]
        const random = Math.random() * (1 - 0.85) + 0.85
        const finish4 = Math.round((((level * power * (att / def)) / 50) + 2) * random)
        setHpPerso(hpPerso- finish4)
    }

        /////////////////////////////////////////////////////////

    //le state qui contient les hp du computeur que l'on va venir diminuer 




    /////////////////////
    const algoPersoAtt1 = () => {
        const level = (2 * 20 / 5) + 2
        const power = DataAttPerso1.power
        const def = pokemonPersoArrayStats[0][3]
        const att = pokemonPersoArrayStats[0][4]
        const random = Math.random() * (1 - 0.85) + 0.85
        const finish1= Math.round((((level * power * (att / def)) / 50) + 2) * random)
        setHpComputer(hpComputer - finish1)

    }
    const algoPersoAtt2 = () => {
        const level = (2 * 20 / 5) + 2
        const power = DataAttPerso2.power
        const def = pokemonPersoArrayStats[0][3]
        const att = pokemonPersoArrayStats[0][4]
        const random = Math.random() * (1 - 0.85) + 0.85
        const finish2 = Math.round((((level * power * (att / def)) / 50) + 2) * random)
        setHpComputer(hpComputer- finish2)

    }

    const algoPersoAtt3 = () => {
        const level = (2 * 20 / 5) + 2
        const power = DataAttPerso3.power
        const def = pokemonPersoArrayStats[0][3]
        const att = pokemonPersoArrayStats[0][4]
        const random = Math.random() * (1 - 0.85) + 0.85
        const finish3 = Math.round((((level * power * (att / def)) / 50) + 2) * random)
        setHpComputer(hpComputer - finish3)

    }
    const algoPersoAtt4 = () => {
        const level = (2 * 20 / 5) + 2
        const power = DataAttPerso4.power
        const def = pokemonPersoArrayStats[0][3]
        const att = pokemonPersoArrayStats[0][4]
        const random = Math.random() * (1 - 0.85) + 0.85
        const finish4 = Math.round((((level * power * (att / def)) / 50) + 2) * random)
        setHpComputer(hpComputer- finish4)
    }

    const randomEnemyAttack = () => {
        const allEnemyAttacks = [algoComputerAtt1(), algoComputerAtt2(), algoComputerAtt3(), algoComputerAtt4()];
        const attackFromEnemy = Math.floor(Math.random() * 4);
        return allEnemyAttacks[attackFromEnemy]
    }





    return (

        <div className='fightPlace'>
       
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
                        <p onClick={() => algoPersoAtt1()}>{DataAttPerso1.name}</p>
                        <p onClick={() => algoPersoAtt2()}>{DataAttPerso2.name}</p>
                        <p onClick={() => algoPersoAtt3()}>{DataAttPerso3.name}</p>
                        <p onClick={() => algoPersoAtt4()}>{DataAttPerso4.name}</p>



                    </div>
                </div>
            </div>

            <div className='textCombat'>Welcome into Pokemon Battle ! {dataPokemonPerso.name} VS {dataPokemonComputer.name}<br></br></div>

        </div>
    );

}

export default Fight2;