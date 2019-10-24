import React from 'react';
import "./Pokelist.css";
import Vs from './Vs'

const random = Math.floor(Math.random() * 151)

class Pokelist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            namePokemon: [],
            keyPokemon: {},
            nameComputer:[],
            keyComputer:{}
        }
    }
    render() {
    return (
        <div onLoad={() => this.setState({nameComputer: this.props.card[random].name, keyComputer: random })}>
            <div className="pokeListDiv">
                <div className="center">
                    {this.props.card.map((x, y) =>
                        <div className="pokeCard" key={y} onClick={() => this.setState({ namePokemon: x.name, keyPokemon: y })}>
                            <img className="pokeImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${y + 1}.png`} alt='image pokemon' />
                            <hr className="cardHr"></hr>
                            <p className="pokeName">{x.name}</p>
                        </div>
                    )}
                </div>
                
            </div>
            <Vs nameVs={this.state.namePokemon} photoVs={this.state.keyPokemon} nameC={this.state.nameComputer} keyC={this.state.keyComputer}/>
        </div>
    )
    }
}

export default Pokelist;