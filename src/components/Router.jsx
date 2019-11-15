import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePokedex from './HomePokedex';
import Fight from './fight/Fight'
import TheQuizz from './quiz/TheQuizz'
import QuizHomepage from './QuizHomepage';
import Quiz from './QuizDeux/Quiz';
import ContactContainer from './contact/ContactContainer';
import FooterHomepage from './Footer/FooterHomepage'
import Accueil from './accueil/Accueil';
import OnclickAccueil from './accueil/OnclickAccueil'



class Router extends Component {

    render() {
        return (
            <Switch> 
                <BrowserRouter>
                    <Route exact path='/' component={Accueil} />
                    <Route exact path='/' component={OnclickAccueil} />
                    <Route exact path='/pokedex' component={HomePokedex} />
                    <Route path='/fight/:idperso/:idcomputer' component={Fight} />
                    <Route path='/quiz' component={QuizHomepage} />
                    <Route path='/quiz1' component ={TheQuizz}/>
                    <Route path='/quiz2' component ={Quiz}/>
                    <Route path='/contact' component ={ContactContainer}/>
                    <Route path='/footer' component={FooterHomepage} />
                </BrowserRouter>
            </Switch>
        )
    }
}

export default Router;
