import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Pokemon from './pokedex/Pokemon';
import Pokemons from './pokedex/Pokemons';

class Router extends Component {

    render() {
        return (
            
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/pokemon/:id' component={Pokemon}/>
                    <Route path='/pokemons/' component={Pokemons}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
