import React, { Component } from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'


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
        <button onClick={this.handleClick} >
          Want more ?
        </button>
        <div className={this.state.clickMe ? "clickMe" : "container"}>
          <footer className='footer'>
            <div className='divCard'>
              <img src='https://www.pinclipart.com/picdir/big/9-91595_mesmerizing-transparent-png-mart-pikachu-png-clipart.png' alt=''></img>
              <hr className="cardHr"></hr>
              <Link to='/quiz'><button>
                QUIZZ
                </button></Link>

            </div>RéduireRéduire
            <div className='divCard'>
              <img src='http://pngimg.com/uploads/pokemon/pokemon_PNG138.png' alt='' />
              <hr className="cardHr"></hr>
              <button>CONTACT</button>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}

export default Footer;