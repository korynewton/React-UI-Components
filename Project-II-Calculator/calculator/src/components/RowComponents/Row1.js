import React from 'react'
import ActionButton from "../ButtonComponents/ActionButton"
import NumberButton from "../ButtonComponents/NumberButton"

const Row1 = props => {
    return (
        <div>
            <ActionButton text="clear"/>
            <NumberButton buttonStyle ="operatorButton" text="&#247;"/>
        </div>
    )
}

export default Row1