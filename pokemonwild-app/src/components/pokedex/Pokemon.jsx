import React from 'react'
import axios from 'axios'
import PokeModal from './PokeModal'

const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon'

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: {
                sprites: {},
                abilities: [],
                types: [],
                height: '',
                moves: [],
                stats: [],
                weight: []
            }



        }
    }
    componentDidMount() {
        axios.get(`${pokemonUrl}/${this.props.match.params.id}`)
            .then(response => {
                this.setState({ pokemon: response.data })
            })
            .catch(err => console.log(err))
    }

    render() {
        const callP = this.state.pokemon;
        return (
            <div>
                <PokeModal
                    imagePokemonFront={callP.sprites.front_default}
                    imagePokemonBack={callP.sprites.back_default}
                    namePokemon={callP.name}
                    abilitiesPokemon={callP.abilities.map(x => x.ability.name)}
                    typePokemon={callP.types.map(x => x.type.name)}
                    taillePokemon={callP.height}
                    moveFight={callP.moves.map(x => x.move.name)}
                    stats={callP.stats.map(x => x.stat.name + x.base_stat)}
                    weight={callP.weight}
                />
            </div>
        );
    }
}




export default Pokemon;