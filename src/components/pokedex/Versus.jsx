import React from 'react';
import './Versus.css'
import axios from 'axios'


class Versus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon:{},
            random: this.props.keyC
            
        }
        this.call = this.call.bind(this)
    }

     call = async () =>{
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.state.random}`)
        .then(res => {
            this.setState({ pokemon: res.data })
            })
        }
        
    componentDidMount() {
        this.call()
    }

        
        
        render() {
            
        return (
            <div>

                <div className="vsDiv">
                    <div className="center">

                        {this.props.nameVs ===this.state.pokemon.name?
                            <div className="pokeCard">
                                <img className="pokeImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.random}.png`} alt="your pokemon" />
                                <hr className="cardHr"></hr>
                                <p className="pokeName">{this.state.pokemon.name}</p>
                            </div>:
                            <div className="pokeCard">
                                <img className="pokeImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${ this.props.photoVs + 1}.png`} alt="" />
                                <hr className="cardHr"></hr>
                                <p className="pokeName">{this.props.nameVs}</p>
                            </div> 
                    }
                    
                        
                            
                            <div className='vsDiv'>
                            <h1 className='vs'>VS</h1>
                            </div>
                        
                        <div className="pokeCard">
                            <img className="pokeImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.state.random}.png`} alt="wild pokemon" />
                            <hr className="cardHr"></hr>
                            <p className="pokeName">{this.state.pokemon.name}</p>
                        </div>
                    </div>
                    <div className='buttonFight'>
                        <button>LET'S FIGHT</button>
                    </div>

                </div>

            </div>
        )
    }

}

export default Versus;