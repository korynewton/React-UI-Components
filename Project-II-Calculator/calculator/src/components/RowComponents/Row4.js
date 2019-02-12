import React from 'react'
import ActionButton from "../ButtonComponents/ActionButton"
import NumberButton from "../ButtonComponents/NumberButton"

const Row4 = props => {
    return (
        <div className='row'>
            <NumberButton buttonStyle ="numberButton" text="1"/>
            <NumberButton buttonStyle ="numberButton" text="2"/>
            <NumberButton buttonStyle ="numberButton" text="3"/>
            <NumberButton buttonStyle ="operatorButton" text="+"/>           
        </div>
    )
}

export default Row4