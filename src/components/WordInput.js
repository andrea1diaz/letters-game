import React from 'react';

const WordInput = (props) => {
    return (
        <div className="input-container">
            <p className={`word ${props.valid ? 'word-valid' : 'word-invalid'}`}>{props.word}</p>
            <div style={{alignSelf: 'center'}}>
                {props.word !== '' && (
                    <p className={props.valid ? 'input-valid' : 'input-invalid'}>
                        { props.valid ? 'valid' : 'invalid' }
                    </p>
                )}
            </div>
        </div>
    )
}

export default WordInput;