import React from 'react'
import axios from 'axios'
import "./Pokemons.css";
import Versus from './Versus'
import Pokemon from './Pokemon'


const random = Math.floor(Math.random() * 151)

class Pokemons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons:{
                results:[]
            },
            namePokemon: ['Bulbazaur'],
            keyPokemon: [],

            keyComputer: [],
            show: false
        }

    }


    showModal = e => {
        this.setState({
            show: !this.state.show
        })
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
            .then(res => {
                this.setState({pokemons: res.data})
            })
    }
    
    render() {

        return (
             <div onLoad={() => this.setState({keyComputer: random})}>
            <div className="pokeListDiv">
             <div className="center"> 
            <Pokemon keyModal={this.state.keyPokemon} onClose={this.showModal} show={this.state.show} />

                    {this.state.pokemons.results.map((x, y) =>
                        <div className="pokeCard" key={y} onClick={() => this.setState({ 
                            namePokemon: x.name, 
                            keyPokemon: y
                            },
                             e => { this.showModal(e) })}>
                            <img className="pokeImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${y + 1}.png`} alt="front sprite on card" />
                            <hr className="cardHr"></hr>
                            <p className="pokeName">{x.name}</p>
                        </div>

                    )}
                </div>
            </div>
            <Versus 
            nameVs={this.state.namePokemon} 
            photoVs={this.state.keyPokemon} 

            keyC={random}/>
            
            
        </div>
        )
        
    }
   
}


export default Pokemons;