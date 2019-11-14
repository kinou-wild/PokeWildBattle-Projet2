import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios'
import "./Fight.css";
import { moveOne, moveTwo, moveThree, moveFour } from '../pokedex/PokeModal'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from './../Loading'





const Fight = (props) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 3000)

    }, [])

    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(true);

    const toggle = () => setModal(!modal);



    const params = props.match.params;




    const [dataPokemonPerso, setDataPokemonPerso] = useState({
        stats: [{}],
        sprites: [],
        moves: [{
            move: {}
        }],
        name: ' '
    });

    const [dataPokemonComputer, setDataPokemonComputer] = useState({
        stats: [],
        sprites: [],
        moves: [{
            move: {}
        }],
        name: ''
    });

    const [clickable, setClickable] = useState(true)

    const [hpComputer, setHpComputer] = useState()
    const [hpComputerPercent, setHpComputerPercent] = useState(100)
    const [animationComputer, setAnimationComputer] = useState(false)
    const [logHPComputer, setLogHPComputer] = useState([])
    const [logComputer, setLogComputer] = useState([])


    const [hpPerso, setHpPerso] = useState()
    const [hpPersoPercent, setHpPersoPercent] = useState(100)
    const [animation, setAnimation] = useState(false)
    const [logHPPerso, setLogHPPerso] = useState([])
    const [logPerso, setLogPerso] = useState([])

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


    const getPokemonComputer = () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.idcomputer}`)
            .then(res => {
                setDataPokemonComputer(res.data)
                setHpComputer(res.data.stats[5].base_stat)
            })
    }

    const capitalizeFirstLetter = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
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
        setLogComputer([...logComputer, DataAttComputer1.name])
        setLogHPComputer([...logHPComputer, finish1])
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
        setLogComputer([...logComputer, DataAttComputer2.name])
        setLogHPComputer([...logHPComputer, finish2])
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
        setLogComputer([...logComputer, DataAttComputer3.name])
        setLogHPComputer([...logHPComputer, finish3])
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
        setLogComputer([...logComputer, DataAttComputer4.name])
        setLogHPComputer([...logHPComputer, finish4])
        setHpPerso(hpPerso - finish4)
        setHpPersoPercent(hpPersoPercent - (100 - (-((finish4 - pokemonPersoArrayStats[0][5]) / pokemonPersoArrayStats[0][5]) * 100)))
    }

    ///////////////////// algo perso /////////////////////////

    const algoPersoAtt1 = () => {

        if (hpPerso > 0) {

            const level = (2 * 20 / 5) + 2
            const power = DataAttPerso1.power
            const def = pokemonPersoArrayStats[0][3]
            const att = pokemonPersoArrayStats[0][4]
            const random = Math.random() * (1 - 0.85) + 0.85
            const finish1 = Math.round((((level * power * (att / def)) / 50) + 2) * random)
            return finish1
        }
    }
    const algoPersoAtt2 = () => {

        if (hpPerso > 0) {

            const level = (2 * 20 / 5) + 2
            const power = DataAttPerso2.power
            const def = pokemonPersoArrayStats[0][3]
            const att = pokemonPersoArrayStats[0][4]
            const random = Math.random() * (1 - 0.85) + 0.85
            const finish2 = Math.round((((level * power * (att / def)) / 50) + 2) * random)
            return finish2
        }
    }
    const algoPersoAtt3 = () => {

        if (hpPerso > 0) {

            const level = (2 * 20 / 5) + 2
            const power = DataAttPerso3.power
            const def = pokemonPersoArrayStats[0][3]
            const att = pokemonPersoArrayStats[0][4]
            const random = Math.random() * (1 - 0.85) + 0.85
            const finish3 = Math.round((((level * power * (att / def)) / 50) + 2) * random)
            return finish3
        }
    }

    const algoPersoAtt4 = () => {

        if (hpPerso > 0) {

            const level = (2 * 20 / 5) + 2
            const power = DataAttPerso4.power
            const def = pokemonPersoArrayStats[0][3]
            const att = pokemonPersoArrayStats[0][4]
            const random = Math.random() * (1 - 0.85) + 0.85
            const finish4 = Math.round((((level * power * (att / def)) / 50) + 2) * random)
            return finish4
        }
    }

    const attack1 = algoPersoAtt1()
    const attack2 = algoPersoAtt2()
    const attack3 = algoPersoAtt3()
    const attack4 = algoPersoAtt4()

    const setterAlgo1 = () => {

        if (hpPerso > 0 && hpComputer > 0) {

            setLogPerso([...logPerso, DataAttPerso1.name])
            setLogHPPerso([...logHPPerso, attack1])
            setHpComputer(hpComputer - attack1)
            setHpComputerPercent(hpComputerPercent - (100 - (-((attack1 - pokemonComputerArrayStats[0][5]) / pokemonComputerArrayStats[0][5]) * 100)))

        }
    }
    const setterAlgo2 = () => {

        if (hpPerso > 0 && hpComputer > 0) {

            setLogPerso([...logPerso, DataAttPerso2.name])
            setLogHPPerso([...logHPPerso, attack2])
            setHpComputer(hpComputer - attack2)
            setHpComputerPercent(hpComputerPercent - (100 - (-((attack2 - pokemonComputerArrayStats[0][5]) / pokemonComputerArrayStats[0][5]) * 100)))
        }
    }
    const setterAlgo3 = () => {

        if (hpPerso > 0 && hpComputer > 0) {

            setLogPerso([...logPerso, DataAttPerso3.name])
            setLogHPPerso([...logHPPerso, attack3])
            setHpComputer(hpComputer - attack3)
            setHpComputerPercent(hpComputerPercent - (100 - (-((attack3 - pokemonComputerArrayStats[0][5]) / pokemonComputerArrayStats[0][5]) * 100)))

        }

    }
    const setterAlgo4 = () => {

        if (hpPerso > 0 && hpComputer > 0) {

            setLogPerso([...logPerso, DataAttPerso4.name])
            setLogHPPerso([...logHPPerso, attack4])
            const atk4 = () => setHpComputer(hpComputer - attack4)
            atk4()
            setHpComputerPercent(hpComputerPercent - (100 - (-((attack4 - pokemonComputerArrayStats[0][5]) / pokemonComputerArrayStats[0][5]) * 100)))
        }
    }


    ////////////////////////////////////////////////////////

    const randomEnnemyAttack = (dmg) => {

        if (hpComputer - dmg > 0 && hpPerso > 0) {
            console.log('hp computer ' + hpComputer)
            console.log('hp perso ' + hpPerso)
            const allEnnemyAttacks = [algoComputerAtt1, algoComputerAtt2, algoComputerAtt3, algoComputerAtt4]
            const randomNumber = Math.floor(Math.random() * 4)
            return (allEnnemyAttacks[randomNumber]())
        }
    }

    const turnPerTurn1 = () => {
        if (clickable) {
            setClickable(false)
            animationPersoC();
            setTimeout(() => { setterAlgo1(); animationComputerC() }, 1500)
            setTimeout(() => { randomEnnemyAttack(attack1); setAnimationComputer(false); setAnimation(false); setClickable(true) }, 3000)
        }
    }

    const turnPerTurn2 = () => {
        if (clickable) {
            setClickable(false)
            animationPersoC();
            setTimeout(() => { setterAlgo2(); animationComputerC() }, 1500)
            setTimeout(() => { randomEnnemyAttack(attack2); setAnimationComputer(false); setAnimation(false); setClickable(true) }, 3000)
        }
    }

    const turnPerTurn3 = () => {
        if (clickable) {
            setClickable(false)
            animationPersoC();
            setTimeout(() => { setterAlgo3(); animationComputerC() }, 1500)
            setTimeout(() => { randomEnnemyAttack(attack3); setAnimationComputer(false); setAnimation(false); setClickable(true) }, 3000)
        }
    }

    const turnPerTurn4 = () => {
        if (clickable) {
            setClickable(false)
            animationPersoC();
            setTimeout(() => { setterAlgo4(); animationComputerC() }, 1500)
            setTimeout(() => { randomEnnemyAttack(attack4); setAnimationComputer(false); setAnimation(false); setClickable(true) }, 3000)
        }
    }
    const handleAttack1 = event => {
        clickable ? turnPerTurn1() : event.preventDefault()
    }
    const animationPersoC = () => {
        if (hpPerso >= 0 && hpComputer >= 0) {
            return setAnimation(true)
        }
    }

    const animationComputerC = () => {
        if (hpPerso >= 0 && hpComputer >= 0) {
            return setAnimationComputer(true)
        }
    }
    /////////// LOG ///////////

    const logEndRef = useRef(null)
    const scrollToBottom = () => {
        if (logEndRef.current !== null) {
            logEndRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }
    useEffect(scrollToBottom, [logPerso, logComputer]);
    const DisplayLog = () => {

        return logPerso.map((x, y) => {
            return <>
                <p>{capitalizeFirstLetter(dataPokemonPerso.name)} uses {x} ! It deals {logHPPerso[y]} damage.</p>
                {logComputer[y] ? <p>{capitalizeFirstLetter(dataPokemonComputer.name)} uses {logComputer[y]} ! It deals {logHPComputer[y]} damage.</p> : ''}

            </>
        })
    }

    /////////////////////////
    if (loading) {
        return <Loading />
    }
    return (
        <div className='fightPlace'>
            <iframe width="0" height="0" src="https://www.youtube.com/embed/t-krHIjao-0?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; loop" allowfullscreen></iframe>
            {console.log(hpComputer)}
            <div className='divFight'>
                <div className='computer'>
                    <div className="infosComputerDiv">
                        <div className="infosComputer">
                            <div className="nameComputer"><p>{capitalizeFirstLetter(dataPokemonComputer.name)}</p></div>
                            <progress className="nes-progress is-success" value={hpComputerPercent} max="100"></progress>
                            <div className="currentHPComputer">{hpComputer >= 0 ? hpComputer : 0} / {pokemonComputerArrayStats[0][5]}</div>
                        </div>
                    </div>
                    <div className="spriteComputer"><img id='abc' onClick={(e) => { console.log('target is ' + e.target.width) }} className={`imageComputer${animationComputer === true && hpComputer > 0 ? ' attackMoveComputer' : ''}`} src={`http://www.pokestadium.com/sprites/xy/${dataPokemonComputer.name}.gif`} alt='front sprite' /></div>
                </div>



                <div className='perso'>
                    <div className="spritePerso"><img className={`imagePerso${animation === true && hpPerso > 0 ? ' attackMove' : ''}`} src={`http://www.pokestadium.com/sprites/xy/back/${dataPokemonPerso.name}.gif`} alt='back sprite' /></div>
                    <div className="infosPersoDiv">
                        <div className="infosPerso">
                            <div className="namePerso"><p>{capitalizeFirstLetter(dataPokemonPerso.name)}</p></div>
                            <progress className="nes-progress is-success" value={hpPersoPercent} max="100"></progress>
                            <div className="currentHPPerso"> {hpPerso >= 0 ? hpPerso : 0} / {pokemonPersoArrayStats[0][5]}</div>
                        </div>
                        <div className="attackChoice">
                            <div className="attack"><button onClick={() => turnPerTurn1 ()} className="button-attack">{DataAttPerso1.name}</button></div>
                            <div className="attack"><button onClick={() => turnPerTurn2()} className="button-attack">{DataAttPerso2.name}</button></div>
                            <div className="attack"><button onClick={() => turnPerTurn3()} className="button-attack">{DataAttPerso3.name}</button></div>
                            <div className="attack"><button onClick={() => turnPerTurn4()} className="button-attack">{DataAttPerso4.name}</button></div>
                        </div>
                    </div>
                </div>



                <div className='textCombat'>
                    Welcome to Pokemon Battle ! {capitalizeFirstLetter(dataPokemonPerso.name)} VS {capitalizeFirstLetter(dataPokemonComputer.name)}
                    <br></br>
                    {DisplayLog()}
                    <br></br>
                    {hpComputer <= 0 ? <p>You won as {dataPokemonPerso.name}.</p> : ""}
                    {hpPerso <= 0 ? <p>You lost as {dataPokemonPerso.name}.</p> : ""}
                    <div ref={logEndRef} />
                </div>

            </div>
            <div>
                {hpComputer <= 0 ?
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                        <ModalBody style={{ textAlign: 'center' }}>
                            YOU WIN !
                    </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={toggle}><Link to={`/pokedex`} style={{ textDecoration: 'none', color: 'black' }}>Back to pokedex</Link></Button>
                        </ModalFooter>
                    </Modal>
                    : ''}
                {hpPerso <= 0 ?
                    <Modal isOpen={modal} toggle={toggle} className={className}>
                        <ModalBody style={{ textAlign: 'center' }}>
                            YOU LOOSE !
                    </ModalBody>
                        <ModalFooter>
                            <Button color="secondary" onClick={toggle}><Link to={`/pokedex`} style={{ textDecoration: 'none', color: 'black' }}>Back to pokedex</Link></Button>
                        </ModalFooter>
                    </Modal>
                    : ''}
            </div>
        </div>
    );
}

export default Fight;