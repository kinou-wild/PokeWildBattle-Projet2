import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Fight from './fight/Fight'





class Router extends Component {

    render() {
        return (
            
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/fight/:idperso/:idcomputer' component={Fight} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;
