import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePokedex from './HomePokedex';
import Accueil from './accueil/Accueil';




class Router extends Component {

    render() {
        return (
            <Switch> 
                <BrowserRouter>
                    <Route exact path='/' component={Accueil} />
                    <Route exact path='/pokedex' component={HomePokedex} />
                    
                </BrowserRouter>
            </Switch>
    
        );
    }
}

export default Router;
