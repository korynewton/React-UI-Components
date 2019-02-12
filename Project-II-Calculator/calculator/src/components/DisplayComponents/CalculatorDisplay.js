import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    return (
        <div className='calcDisplayStyle'>
            <h2>{props.text}</h2>
        </div>
    )
}

export default CalculatorDisplay;
