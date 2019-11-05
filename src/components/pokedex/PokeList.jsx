import React from 'react'
import axios from 'axios'
import "./PokeList.css";
import Versus from './Versus'
import PokeModal from './PokeModal'
import MyInput from './Searchbar'

const random = Math.floor(Math.random() * 151)

class PokeList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: {
                results: []
            },
            namePokemon: ['Bulbazaur'],
            keyPokemon: [],
            keyComputer: [],
            show: false,
            research : "",
            modal:false,
        }
        this.setResearch=this.setResearch.bind(this);
        this.changeStateModal = this.changeStateModal.bind(this)
    }
    
    changeStateModal () {
        this.setState({modal : !this.state.modal})
    }

    setResearch=(e)=>{this.setState({research:e})
    }


    
    componentDidMount() {
            axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
            .then(res => {
                this.setState({ pokemons: res.data })
            })
    }

    render() {

        return (
             <div onLoad={() => this.setState({keyComputer: random})}>
             <p>{this.state.research}</p>
            <div className='Search' style={{zIndex:100}}>
<MyInput suggestions={this.state.pokemons.results.map(x=>x.name)} handler = {this.setResearch}></MyInput>
</div>
            <div className="pokeListDiv">
             <div className="center"> 
             <PokeModal keyModal={this.state.keyPokemon} changeStateModal={this.changeStateModal} stateModal={this.state.modal} namePokemon={this.state.namePokemon}/>

                    {this.state.pokemons.results.map((x, y) => {
                    if (this.state.research === "") {
                        return(
                        <div className="pokeCard" key={y} onClick={() => this.setState({ 
                            namePokemon: x.name, 
                            keyPokemon: y,
                            modal:!this.state.modal
                            })}>
                            <img className="pokeImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${y + 1}.png`} alt="front sprite on card" />
                            <hr className="cardHr"></hr>
                            <p className="pokeName">{x.name}</p>
                        </div>)}
                    else if (x.name.includes(this.state.research)) {
                        return(
                            <div className="pokeCard" key={y} onClick={() => this.setState({ 
                            namePokemon: x.name, 
                            keyPokemon: y,
                            modal:!this.state.modal
                            })}>
                            <img className="pokeImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${y + 1}.png`} alt="front sprite on card" />
                            <hr className="cardHr"></hr>
                            <p className="pokeName">{x.name}</p>
                        </div>                            
                        )}
                    
                        }

                    )}
                </div>
               
            </div>
            <Versus
                    nameVs={this.state.namePokemon}
                    photoVs={this.state.keyPokemon}
                    keyC={random} />


            </div>
        )

    }

}


export default PokeList;