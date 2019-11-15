import React from 'react'
import './QuizHomepage.css'
import Particle from '../Particle';
import {Link} from 'react-router-dom'
//import {Button} from 'reactstrap'

class QuizHomepage extends React.Component {
   
    render() { 
        return ( 
            <div>
                <Particle/>
            <div className='homepagecontainer'>
                <div className='imgcontainer'>
                    <img className='imghomepage' src='https://fmslife.fr/uploads/default/original/1X/8d2462200354d822115b52aeeb51f1c0ce4fb142.png' alt=''></img>
                    <Link to='/quiz1'> 
                    <button className='homepagebtn nes-btn'>Which Pokémon are you?
                    </button>
                    </Link>
                </div>
                <div className='imgcontainer'>
                    <img className='imghomepage' src='http://document.nintendo-difference.com/35361/artworks/f9708df632d9e20db9cc7d1247080b3c.png' alt=''></img>
                    <Link to='/quiz2'>
                    <button className='homepagebtn nes-btn'>What do you know about Pokémon?
                    </button>
                    </Link>
                </div>
            </div>
            <Link to='/pokedex' className='homepagepokedexbtn'>
            <button className='backToPokedex'>
                Back to Pokedex
            </button>
            </Link>
            </div>
         );
    }
}
 
export default QuizHomepage;
