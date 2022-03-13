import React from 'react';
import { isMobile } from 'react-device-detect';

const WordInput = (props) => {

    console.log(isMobile)
    return (
        <div className={`${isMobile ? 'i-c-m' : 'input-container'}`}>
            <p className={`${isMobile ? 'word-m' : 'word'} ${props.valid ? 'word-valid' : 'word-invalid'}`}>{props.word}</p>
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