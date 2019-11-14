import React from 'react'
import './onclickaccueil.css'
import { Link } from 'react-router-dom';



const OnclickAccueil = () => {
    return (
        <Link className='accueil'to={'/pokedex'}></Link>
    )
}

export default OnclickAccueil