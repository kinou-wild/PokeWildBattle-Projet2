import React from 'react'
import './FooterHomepage.css'
import Particle from '../../Particle';
import {Link} from 'react-router-dom'

class QuizHomepage extends React.Component {
   
    render() { 
        return ( 
            <div>
                <Particle/>
            <div className='homepagecontainer'>
                <div className='imgcontainer'>
                    <img className='imgfooterhomepage' src='https://www.pinclipart.com/picdir/big/9-91595_mesmerizing-transparent-png-mart-pikachu-png-clipart.png' alt=''></img>
                    <Link to='/quiz'> 
                    <button className='homepagebtn nes-btn'>Quiz
                    </button>
                    </Link>
                </div>
                <div className='imgcontainer'>
                    <img className='imgfooterhomepage' src='http://pngimg.com/uploads/pokemon/pokemon_PNG138.png' alt=''></img>
                    <Link to='/contact'>
                    <button className='homepagebtn nes-btn'>Contact
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
