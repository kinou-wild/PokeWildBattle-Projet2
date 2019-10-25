import React, {Component} from 'react'
import './Footer.css'


class Footer extends Component {
  constructor(props){
    super(props);
    this.state = {
      clickMe: true
    }
  }
  handleClick= () => {
    this.setState({clickMe: !this.state.clickMe})
  }

  render(){ 
    return ( 
      <div>
  
        <div className={this.state.clickMe? "clickMe" : "container"}>
          <footer className='footer'>
              <div className='divCard'>
                <img src='https://www.pinclipart.com/picdir/big/9-91595_mesmerizing-transparent-png-mart-pikachu-png-clipart.png' alt=''></img>
                <hr className="cardHr"></hr>
                <button>
                  QUIZZ
                </button>
              </div>
              <div className='divCard'>
                <img src='http://pngimg.com/uploads/pokemon/pokemon_PNG138.png' alt=''/>
                <hr className="cardHr"></hr>
                <button>CONTACT</button>
              </div>  
          </footer>
        </div>
        <button onClick={this.handleClick} >
          Want more ?
        </button>
      </div>
     );
  }
}
 
export default Footer;