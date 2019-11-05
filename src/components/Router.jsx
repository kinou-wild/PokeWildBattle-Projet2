import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePokedex from './HomePokedex';
import Accueil from './accueil/Accueil';
import Fight from './fight/Fight'





class Router extends Component {

    render() {
        return (
            <Switch> 
                <BrowserRouter>
                    <Route exact path='/' component={Accueil} />
                    <Route exact path='/pokedex' component={HomePokedex} />
                    <Route path='/fight/:idperso/:idcomputer' component={Fight} />     
                </BrowserRouter>
            </Switch>
        );
    }
}

export default Router;
