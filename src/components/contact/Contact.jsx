import React from 'react'
import './Contact.css'





class Contact extends React.Component {
    
    render() { 
        return (
            <div className="contact">
                <div className="nes-container with-title contactcard">
                    <h1 className="title contacth1">{this.props.name}</h1>
                    <div>
                        <img className="avatar" src={this.props.avatar} alt=''/>
                        <a className="icon" href={this.props.linkedIn}>
                        <i className="nes-pokeball"></i>
                        <i className="nes-octocat animated"></i>
                        <i className="nes-icon linkedin is-large"></i>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}


 
export default Contact;