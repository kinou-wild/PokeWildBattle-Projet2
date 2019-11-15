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
        <Link to='/Footer'>
        <button className='footerbutton' onClick={this.handleClick} >
          Want more ?
        </button>
        </Link>
      </div>
    );
  }
}

export default Footer;