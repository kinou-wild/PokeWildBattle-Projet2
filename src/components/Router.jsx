import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePokedex from './HomePokedex';
import Accueil from './accueil/Accueil';
import OnclickAccueil from './accueil/OnclickAccueil'
import Fight from './fight/Fight';
import TheQuizz from './quiz/TheQuizz';

class Router extends Component {

    render() {
        return (
            <Switch> 
                <BrowserRouter>
                    <Route exact path='/' component={Accueil} />
                    <Route exact path='/' component={OnclickAccueil} />
                    <Route exact path='/pokedex' component={HomePokedex} />
                    <Route path='/fight/:idperso/:idcomputer' component={Fight} />
                    <Route path='/quiz' component={TheQuizz} />
                </BrowserRouter>
            </Switch>
        )
    }
}

export default Router;
