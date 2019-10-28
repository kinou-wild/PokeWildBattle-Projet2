import React, { Component } from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Home from './Home';
import Pokemon from './pokedex/Pokemon';




class Router extends Component {

    render() {
        return (
            
            <BrowserRouter>
                    <Route exact path='/' component={Home} />
            </BrowserRouter>
        );
    }
}

export default Router;
