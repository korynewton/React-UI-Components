import React from 'react'
import ActionButton from "../ButtonComponents/ActionButton"
import NumberButton from "../ButtonComponents/NumberButton"

const Row2 = props => {
    return (
        <div className='row'>
            <NumberButton buttonStyle ="numberButton" text="7"/>
            <NumberButton buttonStyle ="numberButton" text="8"/>
            <NumberButton buttonStyle ="numberButton" text="9"/>
            <NumberButton buttonStyle ="operatorButton" text="x"/>           
        </div>
    )
}

export default Row2