import React from 'react'
import PropTypes from 'prop-types'
import './PokeModal.css'

class PokeModal extends React.Component {

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    }

    render() {

        if (!this.props.show) {
            return null;
        }

        return (
            <div className="pokeModal">
                <div className="pokeSprite">
                    <img src="http://www.pokestadium.com/sprites/xy/umbreon.gif" alt='umbreon front' />
                    <img src="http://www.pokestadium.com/sprites/xy/back/umbreon.gif" alt='umbreon back' />
                </div>
                <div className="pokeInfo">
                    <p>Name : Umbreon</p>
                    <p>Type : Darkness</p>
                    <p>Height : 1,50</p>
                    <p> : ???</p>
                    <p>Stats : </p>
                    <p>Weight : HEAVY !</p>
                </div>
                <div className="pokeAttack">
                    <p>Moves :</p>
                    <p>Dark Ball</p>
                    <p>Bite</p>
                </div>
                <button className="toogle-button" onClick={this.onClose}>Close</button>
            </div>
        )
    }
}

PokeModal.propTypes = {
    onClose : PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
}

export default PokeModal