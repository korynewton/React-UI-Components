import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
    const display = 0;
    return (
        <div className='calcDisplayStyle'>
            <h2>{props.display.value}</h2>
        </div>
    )
}

export default CalculatorDisplay;
