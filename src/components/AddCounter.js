import React from 'react';
import PropTypes from 'prop-types'

export const AddCounter = ({onAddPress}) => {

    //no es una buena practica
    /* const onAddPress = (evento, mensaje) => {
        console.log(evento, mensaje)
    } */
    
    return (
        <button type="button"
        onClick = {onAddPress}>
        +1
        </button>
    )
}

AddCounter.propTypes = {
    onAddPress : PropTypes.func.isRequired
}