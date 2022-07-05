import React from 'react';
import './Cards.css';

const Cards = ( props ) => {
    switch(props.severity) {
        case 1:
            return(
                <div className="Card">
                    <div className="CardNormal">
                        <h1>{props.title}</h1>
                        <hr/>
                        <p>{props.body}</p>
                    </div>
                </div>
            )
        case 2:
            return (
                <div className="Card">
                    <div className="CardNew">
                        <h1>{props.title}</h1>
                        <hr/>
                        <p>{props.body}</p>
                    </div>
                </div>
            )
        case 3:
            return (
                <div className="Card">
                    <div className="CardAlert">
                        <h1>{props.title}</h1>
                        <hr/>
                        <p>{props.body}</p>
                    </div>
                </div>
            );
        default:
            return (
                <div className="Card">
                    <div className="CardNew">
                        <h1>{props.title}</h1>
                        <hr/>
                        <p>{props.body}</p>
                    </div>
                </div>
            )
    }
};

export default Cards;