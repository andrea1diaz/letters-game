import React from 'react';

import CloseIcon from './CloseIcon';

import './WordInput.css'

const ResetButton = (props) => {
    return (
        <div
            className="reset-button"
            onClick={props.handleReset}
        >
            <p>clear word</p>
            <CloseIcon />
        </div>
    )
}

export default ResetButton;