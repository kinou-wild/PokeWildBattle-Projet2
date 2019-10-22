import React from 'react'
import axios from 'axios'
import Pokelist from './Pokelist'

class Pokemons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
        }
    }

    componentDidMount() {
        axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151')
            .then(res => {
                this.setState({ results: res.data.results })
            })
    }
    
    render() {
        return (
            <Pokelist  card={this.state.results} />

        )
    }
}


export default Pokemons;