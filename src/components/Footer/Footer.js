import React, { Component } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player'



class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickMe: true
    }
  }
  handleClick = () => {
    this.setState({ clickMe: !this.state.clickMe })
  }

  render() {
    return (
      <div>
        <Link to='/Footer'>
        <button className='footerbutton' onClick={this.handleClick} >
          Want more ?
        </button>
        </Link>
        <ReactPlayer className="music-pokedex" url="https://www.youtube.com/embed/5NmjzE-zmlk" playing controls
                config={{
                    file: {
                        attributes: {
                            autoPlay: true,
                            
                        }
                    }
                }}
            />
      </div>
    );
  }
}

export default Footer;