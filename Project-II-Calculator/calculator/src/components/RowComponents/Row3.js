import React from 'react'
import ActionButton from "../ButtonComponents/ActionButton"
import NumberButton from "../ButtonComponents/NumberButton"

const Row3 = props => {
    return (
        <div className='row'>
            <NumberButton buttonStyle ="numberButton" text="4"/>
            <NumberButton buttonStyle ="numberButton" text="5"/>
            <NumberButton buttonStyle ="numberButton" text="6"/>
            <NumberButton buttonStyle ="operatorButton" text="-"/>           
        </div>
    )
}

export default Row3