import React from 'react';
import './Card.css';

import CardBanner from './CardBanner'
import CardContent from './CardContent'

function CardContainer() {
    return (
        <div className="cardCont">
            <a href='https://reactjs.org' target='_blank'>
                <div>
                <CardBanner />
                <CardContent />
                </div>
            </a>
        </div>
    );
}




export default CardContainer
