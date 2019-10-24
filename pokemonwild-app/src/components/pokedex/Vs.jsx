import React from 'react';
import './vs.css'


class Pokelist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="vsDiv">
                    <div className="center">
                        {this.props.nameVs == false ? 
                        <div className="pokeCard">
                            <img className="pokeImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.keyC + 1}.png`} alt="Image pokémon" />
                            <hr className="cardHr"></hr>
                            <p className="pokeName">{this.props.nameC}</p>
                        </div> : 
                        <div className="pokeCard">
                                <img className="pokeImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.photoVs + 1}.png`} alt="Image pokémon" />
                                <hr className="cardHr"></hr>
                                <p className="pokeName">{this.props.nameVs}</p>
                        </div>}
                            

                            <div className='vsDiv'>
                            <h1 className='vs'>VS</h1>
                            </div>
                        
                        <div className="pokeCard">
                            <img className="pokeImg" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.keyC+1}.png`} alt="Image pokémon" />
                            <hr className="cardHr"></hr>
                            <p className="pokeName">{this.props.nameC}</p>
                        </div>
                    </div>
                    <div className='buttonFight'>
                        <button>Let's fight</button>
                    </div>

                </div>
            </div>
        )
    }

}

export default Pokelist;