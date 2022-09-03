import React from 'react';
import PropTypes from 'prop-types'

//recibe un numero, luego le cambia el valor a 90 e imprime
export const ShowCounter = ({ number }) => {
    /* number = 90;
    console.log(number) */
    return (
        <p>{number}</p>
    )
}

//afuerzas tiene que enviar  un "algo" que tiene que ser un numero
//hay varios tipos de protypes
ShowCounter.propTypes = {
    number : PropTypes.number.isRequired
}