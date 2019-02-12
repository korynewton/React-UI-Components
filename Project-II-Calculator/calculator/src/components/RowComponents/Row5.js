import React from 'react'
import ActionButton from "../ButtonComponents/ActionButton"
import NumberButton from "../ButtonComponents/NumberButton"

const Row1 = props => {
    return (
        <div>
            <ActionButton text="0"/>
            <NumberButton buttonStyle ="operatorButton" text="="/>
        </div>
    )
}

export default Row1