import React, { useState, useEffect } from 'react';
import axios from 'axios'
import "./Fight.css";
import { moveOne, moveTwo, moveThree, moveFour } from '../pokedex/PokeModal'



const Fight = (props) => {
    const params = props.match.params;


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
        moves: [{
            move: {}
        }]
    });

    const [hpComputer, setHpComputer] = useState()
    const [hpComputerPercent, setHpComputerPercent] = useState(100)


    const [hpPerso, setHpPerso] = useState()
    const [hpPersoPercent, setHpPersoPercent] = useState(100)

    useEffect(() => {
        getPokemonPerso()
    }, [])

    useEffect(() => {
        getPokemonComputer()
    }, [])

    const getPokemonPerso = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.idperso}`)
            .then(res => {
                setDataPokemonPerso(res.data)
                setHpPerso(res.data.stats[5].base_stat)
            })
    }

    const getPokemonComputer = async () => {
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${params.idcomputer}`)
            .then(res => {
                setDataPokemonComputer(res.data)
                setHpComputer(res.data.stats[5].base_stat)
            })
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




    const getAttPerso4 = (url) => {
        axios.get(url)
            .then(res => setDataAttPerso4(res.data))
    }


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




    const getAttComputer4 = (url) => {
        axios.get(url)
            .then(res => setDataAttComputer4(res.data))
    }




    useEffect(() => {
        const urlComp1 = dataPokemonComputer.moves[moveOne % dataPokemonComputer.moves.length].move.url
        const urlComp2 = dataPokemonComputer.moves[moveTwo % dataPokemonComputer.moves.length].move.url
        const urlComp3 = dataPokemonComputer.moves[moveThree % dataPokemonComputer.moves.length].move.url
        const urlComp4 = dataPokemonComputer.moves[moveFour % dataPokemonComputer.moves.length].move.url

        getAttComputer1(urlComp1)
        getAttComputer2(urlComp2)
        getAttComputer3(urlComp3)
        getAttComputer4(urlComp4)
    }, [dataPokemonComputer])




    useEffect(() => {
        const url1 = dataPokemonPerso.moves[moveOne % dataPokemonPerso.moves.length].move.url
        const url2 = dataPokemonPerso.moves[moveTwo % dataPokemonPerso.moves.length].move.url
        const url3 = dataPokemonPerso.moves[moveThree % dataPokemonPerso.moves.length].move.url
        const url4 = dataPokemonPerso.moves[moveFour % dataPokemonPerso.moves.length].move.url
        getAttPerso1(url1)
        getAttPerso2(url2)
        getAttPerso3(url3)
        getAttPerso4(url4)
    }, [dataPokemonPerso])


    ////////////////////////////////////

    const pokemonPersoArrayStats = [dataPokemonPerso.stats.map(x => x.base_stat)]
    const pokemonComputerArrayStats = [dataPokemonComputer.stats.map(x => x.base_stat)]

    ///////////////////////////////////

    const algoComputerAtt1 = () => {
        const level = (2 * 20 / 5) + 2
        const power = DataAttComputer1.power
        const def = pokemonComputerArrayStats[0][3]
        const att = pokemonComputerArrayStats[0][4]
        const random = Math.random() * (1 - 0.85) + 0.85
        const finish1 = Math.round((((level * power * (att / def)) / 50) + 2) * random)
        setHpPerso(hpPerso - finish1)
        setHpPersoPercent(hpPersoPercent - (100 - (-((finish1 - pokemonPersoArrayStats[0][5]) / pokemonPersoArrayStats[0][5]) * 100)))
    }

    const algoComputerAtt2 = () => {
        const level = (2 * 20 / 5) + 2
        const power = DataAttComputer2.power
        const def = pokemonComputerArrayStats[0][3]
        const att = pokemonComputerArrayStats[0][4]
        const random = Math.random() * (1 - 0.85) + 0.85
        const finish2 = Math.round((((level * power * (att / def)) / 50) + 2) * random)
        setHpPerso(hpPerso - finish2)
        setHpPersoPercent(hpPersoPercent - (100 - (-((finish2 - pokemonPersoArrayStats[0][5]) / pokemonPersoArrayStats[0][5]) * 100)))

    }

    const algoComputerAtt3 = () => {
        const level = (2 * 20 / 5) + 2
        const power = DataAttComputer3.power
        const def = pokemonComputerArrayStats[0][3]
        const att = pokemonComputerArrayStats[0][4]
        const random = Math.random() * (1 - 0.85) + 0.85
        const finish3 = Math.round((((level * power * (att / def)) / 50) + 2) * random)
        setHpPerso(hpPerso - finish3)
        setHpPersoPercent(hpPersoPercent - (100 - (-((finish3 - pokemonPersoArrayStats[0][5]) / pokemonPersoArrayStats[0][5]) * 100)))

    }
    const algoComputerAtt4 = () => {
        const level = (2 * 20 / 5) + 2
        const power = DataAttComputer4.power
        const def = pokemonComputerArrayStats[0][3]
        const att = pokemonComputerArrayStats[0][4]
        const random = Math.random() * (1 - 0.85) + 0.85
        const finish4 = Math.round((((level * power * (att / def)) / 50) + 2) * random)
        setHpPerso(hpPerso - finish4)
        setHpPersoPercent(hpPersoPercent - (100 - (-((finish4 - pokemonPersoArrayStats[0][5]) / pokemonPersoArrayStats[0][5]) * 100)))
    }

    ///////////////////// algo perso /////////////////////////

    const algoPersoAtt1 = () => {

        if (hpPerso >= 0) {

            const level = (2 * 20 / 5) + 2
            const power = DataAttPerso1.power
            const def = pokemonPersoArrayStats[0][3]
            const att = pokemonPersoArrayStats[0][4]
            const random = Math.random() * (1 - 0.85) + 0.85
            const finish1 = Math.round((((level * power * (att / def)) / 50) + 2) * random)
            setHpComputer(hpComputer - finish1)
            setHpComputerPercent(hpComputerPercent - (100 - (-((finish1 - pokemonComputerArrayStats[0][5]) / pokemonComputerArrayStats[0][5]) * 100)))

        }
    }

    const algoPersoAtt2 = () => {

        if (hpPerso >= 0) {

            const level = (2 * 20 / 5) + 2
            const power = DataAttPerso2.power
            const def = pokemonPersoArrayStats[0][3]
            const att = pokemonPersoArrayStats[0][4]
            const random = Math.random() * (1 - 0.85) + 0.85
            const finish2 = Math.round((((level * power * (att / def)) / 50) + 2) * random)
            setHpComputer(hpComputer - finish2)
            setHpComputerPercent(hpComputerPercent - (100 - (-((finish2 - pokemonComputerArrayStats[0][5]) / pokemonComputerArrayStats[0][5]) * 100)))
        }
    }

    const algoPersoAtt3 = () => {

        if (hpPerso >= 0) {

            const level = (2 * 20 / 5) + 2
            const power = DataAttPerso3.power
            const def = pokemonPersoArrayStats[0][3]
            const att = pokemonPersoArrayStats[0][4]
            const random = Math.random() * (1 - 0.85) + 0.85
            const finish3 = Math.round((((level * power * (att / def)) / 50) + 2) * random)
            setHpComputer(hpComputer - finish3)
            setHpComputerPercent(hpComputerPercent - (100 - (-((finish3 - pokemonComputerArrayStats[0][5]) / pokemonComputerArrayStats[0][5]) * 100)))

        }

    }


    const algoPersoAtt4 = () => {

        if (hpPerso >= 0) {

            const level = (2 * 20 / 5) + 2
            const power = DataAttPerso4.power
            const def = pokemonPersoArrayStats[0][3]
            const att = pokemonPersoArrayStats[0][4]
            const random = Math.random() * (1 - 0.85) + 0.85
            const finish4 = Math.round((((level * power * (att / def)) / 50) + 2) * random)
            setHpComputer(hpComputer - finish4)
            setHpComputerPercent(hpComputerPercent - (100 - (-((finish4 - pokemonComputerArrayStats[0][5]) / pokemonComputerArrayStats[0][5]) * 100)))
        }


    }

    ////////////////////////////////////////////////////////

    const randomEnnemyAttack = () => {

        if (hpComputer >= 0) {

            const allEnnemyAttacks = [algoComputerAtt1(), algoComputerAtt2(), algoComputerAtt3(), algoComputerAtt4()]
            return (allEnnemyAttacks[Math.floor(Math.random() * 4)])

        }


    }

    const turnPerTurn1 = () => {
        algoPersoAtt1()
        setTimeout(randomEnnemyAttack(), 2000)
    }

    const turnPerTurn2 = () => {
        algoPersoAtt2()
        setTimeout(randomEnnemyAttack(), 2000)
        
    }

    const turnPerTurn3 = () => {
        algoPersoAtt3()
        setTimeout(randomEnnemyAttack(), 2000)
    }


    const turnPerTurn4 = () => {
        algoPersoAtt4()
        setTimeout(randomEnnemyAttack(), 2000)
    }


    return (
        <div className='fightPlace'>

            <div className='divFight'>
                <div className='computer'>
                    <div className="infosComputerDiv">
                        <div className="infosComputer">
                            <div className="nameComputer"><p>{dataPokemonComputer.name}</p></div>
                            <progress className="nes-progress is-success" value={hpComputerPercent} max="100"></progress>
                            <div className="currentHPComputer">{hpComputer >= 0 ? hpComputer : 0} / {pokemonComputerArrayStats[0][5]}</div>
                        </div>
                    </div>
                    <div className="spriteComputer"><img className="imageComputer" src={`http://www.pokestadium.com/sprites/xy/${dataPokemonComputer.name}.gif`} alt='front sprite' /></div>
                </div>



                <div className='perso'>
                    <div className="spritePerso"><img className="imagePerso" src={`http://www.pokestadium.com/sprites/xy/back/${dataPokemonPerso.name}.gif`} alt='back sprite' /></div>
                    <div className="infosPersoDiv">
                        <div className="infosPerso">
                            <div className="namePerso"><p>{dataPokemonPerso.name}</p></div>
                            <progress className="nes-progress is-success" value={hpPersoPercent} max="100"></progress>
                            <div className="currentHPPerso"> {hpPerso >= 0 ? hpPerso : 0} / {pokemonPersoArrayStats[0][5]}</div>
                        </div>
                        <div className="attackChoice">
                            <div className="attack"><button onClick={() => turnPerTurn1()} className="button-attack">{DataAttPerso1.name}</button></div>
                            <div className="attack"><button onClick={() => turnPerTurn2()} className="button-attack">{DataAttPerso2.name}</button></div>
                            <div className="attack"><button onClick={() => turnPerTurn3()} className="button-attack">{DataAttPerso3.name}</button></div>
                            <div className="attack"><button onClick={() => turnPerTurn4()} className="button-attack">{DataAttPerso4.name}</button></div>
                        </div>
                    </div>

                </div>



                <div className='textCombat'>
                    Welcome into Pokemon Battle ! {dataPokemonPerso.name} VS {dataPokemonComputer.name}
                    <br></br>
                    <br></br>
                    {hpComputer <= 0 ? <p>Tu as gagné avec {dataPokemonPerso.name}</p> : ""}
                    {hpPerso <= 0 ? <p>Tu as perdu avec {dataPokemonPerso.name}</p> : ""}

                </div>

            </div>

        </div>
    );
}

export default Fight;