import React from 'react';
import Particle from '../Particle';
import Pokedex from './pokedex/Pokedex'
import Footer from './Footer/Footer'
import Loading from './Loading'
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
                <iframe className="music-pokedex" width="510" height="315" src="https://www.youtube.com/embed/5NmjzE-zmlk?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        
            </div>
        );
    }
}

export default HomePokedex;