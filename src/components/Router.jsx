import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePokedex from './HomePokedex';
import Accueil from './accueil/Accueil';
import Fight from './fight/Fight'
import Fight2 from './fight/Fight2'
import {FightController} from './fight/ContextFight'








class Router extends Component {

    render() {
        return (
            <Switch> 
                <BrowserRouter>
                    <Route exact path='/' component={Accueil} />
                    <Route exact path='/pokedex' component={HomePokedex} />
                    <FightController>
                        <Route path='/fight/:idperso/:idcomputer' component={Fight} />
                        <Route path='/fight2/:idperso/:idcomputer' component={Fight2} />    
                    </FightController>  
                </BrowserRouter>
            </Switch>
        );
    }
}

export default Router;
