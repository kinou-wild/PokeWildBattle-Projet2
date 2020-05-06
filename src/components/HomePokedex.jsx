import React from 'react';
import Particle from '../Particle';
import Pokedex from './pokedex/Pokedex'
import Loading from './Loading'
import Footer from './Footer/Footer'
import './HomePokedex.css'



class HomePokedex extends React.Component {
    state = {
        loading: true
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({ loading: false })
        }, 3000)
    }

    render() {
        if (this.state.loading) {
            return <Loading />
        }
        return (
            <div>
                <Particle />
                <Pokedex />
                <Footer />         
            </div>
        );
    }
}

export default HomePokedex;