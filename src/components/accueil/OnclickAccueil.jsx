import React from 'react'
import './onclickaccueil.css'
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';



const OnclickAccueil = () => {
    return (
        <>
            <Link className='accueil' to={'/pokedex'}></Link>
            <ReactPlayer className="music-home" url="https://www.youtube.com/embed/iOCMgLKIPmQ" playing
            controls volume = "0.80"
                config={{
                    file: {
                        attributes: {
                            autoPlay: true,
                            
                        }
                    }
                }}
            />
        </>
    )
}

export default OnclickAccueil