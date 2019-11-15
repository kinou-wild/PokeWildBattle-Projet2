import React from 'react'
import './onclickaccueil.css'
import { Link } from 'react-router-dom';



const OnclickAccueil = () => {
    return (
        <>
            <Link className='accueil' to={'/pokedex'}></Link>
            <iframe className="music-home" width="560" height="315" src="https://www.youtube.com/embed/iOCMgLKIPmQ?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </>
    )
}

export default OnclickAccueil