import React from 'react';
import PropTypes from 'prop-types'

export const RemoveCounter = ({onRemovePress}) => {

    return (
        <button type="button"
        onClick = {onRemovePress}>
        -1
        </button>
    )
}

RemoveCounter.propTypes = {
    onRemovePress : PropTypes.func.isRequired
}