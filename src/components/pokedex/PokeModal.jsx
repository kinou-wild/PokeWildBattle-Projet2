import React from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'
import './PokeModal.css'



const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon'


class PokeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: {
                types:[],
                moves:[],
                stats:[]
            }
        }
        
    }
    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    }

    UNSAFE_componentWillReceiveProps() {
        axios.get(`${pokemonUrl}/${this.props.keyModal+1}`)
            .then(response => {
                this.setState({ pokemon: response.data })
            })
            .catch(err => console.log(err))
    }

    render() {

        const randomMove = (Math.random() * ((this.state.pokemon.moves.length) - 1) + 1)

        if (!this.props.show) {
            return null
        }

        return (
            <div className="pokeModal">
                <div className="pokeSprite">
                    <img className="pokeImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.keyModal + 1}.png`} alt="front sprite on card" />
                    <img className="pokeImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${this.props.keyModal + 1}.png`} alt="front sprite on card" />
                </div>
                <div className="pokeInfo">
                    <p>{this.props.nameModal}</p>
                    <p>Type :{`${this.state.pokemon.types.map(x => x.type.name)} `}</p>
                    <p>Height : {this.state.pokemon.height}</p>
                    <p>Weight : {this.state.pokemon.weight}</p>

                    {this.state.pokemon.stats.map(x => 
                        <p>{x.stat.name} {x.base_stat}</p>)}   
                </div>
                <div className="pokeAttack">
                    <p>Moves : {`${this.state.pokemon.moves.slice(randomMove,(randomMove +4)).map(x => x.move.name)}`} </p>
                </div>
                <button className="toogle-button" onClick={this.onClose}>Close</button>
            </div>
                

                
        
        );
    }
}

PokeModal.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
}



export default PokeModal;