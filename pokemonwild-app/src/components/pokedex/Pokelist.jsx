import React from 'react';
import "./Pokelist.css";
import Versus from './Versus'
import PokeModal from './PokeModal'

const random = Math.floor(Math.random() * 151)

class Pokelist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            namePokemon: [],
            keyPokemon: {},
            nameComputer:[],
            keyComputer:{},
            show: false
        }
    }

    showModal = e => {
        this.setState({
            show: !this.state.show
        })
    }

    render() {
    return (
        <div onLoad={() => this.setState({nameComputer: this.props.card[random].name, keyComputer: random })}>
            <div className="pokeListDiv">
             <div className="center"> 
                <PokeModal onClose={this.showModal} show={this.state.show} />
                    {this.props.card.map((x, y) =>
                        <div className="pokeCard" key={y} onClick={() => this.setState({ namePokemon: x.name, keyPokemon: y }, e => { this.showModal(e) })}>
                            <img className="pokeImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${y + 1}.png`} alt="front sprite on card" />
                            <hr className="cardHr"></hr>
                            <p className="pokeName">{x.name}</p>
                        </div>
                    )}
                </div>
            </div>
            <Versus nameVs={this.state.namePokemon} photoVs={this.state.keyPokemon} nameC={this.state.nameComputer} keyC={this.state.keyComputer}/>
        </div>
    )
    }
}

export default Pokelist;