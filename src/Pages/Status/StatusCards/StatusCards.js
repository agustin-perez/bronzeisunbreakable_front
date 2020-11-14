import React from 'react';
import './StatusCards.css';

const StatusCards = ( props ) => {
    switch(props.serverity) {
        case 'normal':
            return(
                <div className="StatusCard">
                    <div className="StatusNormal">
                        <p className="StatusCTitle">{props.title}</p>
                        <p className="StatusCText">{props.text}</p>
                    </div>
                </div>
            )
        case 'warning':
            return (
                <div className="StatusCard">
                    <div className="StatusWarning">
                        <p className="StatusCTitle">{props.title}</p>
                        <p className="StatusCText">{props.text}</p>
                    </div>
                </div>
            )
        case 'critical':
            return (
                <div className="StatusCard">
                    <div className="StatusCritical">
                        <i className="fas fa-exclamation-triangle"></i>
                        <p className="StatusCTitle">{props.title}</p>
                        <p className="StatusCText">{props.text}</p>
                    </div>
                </div>
            );
        default:
            return (
                <div className="StatusCard">
                    <div className="StatusDefault">
                        <p className="StatusCTitle">{props.title}</p>
                        <p className="StatusCText">{props.text}</p>
                    </div>
                </div>
            )
    }
};

export default StatusCards;