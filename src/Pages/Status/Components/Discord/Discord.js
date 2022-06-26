import React, { useState } from 'react';
import styled from 'styled-components';
import './Discord.css';

const Disc = styled.div`
    display: block;
    position: fixed;
    background-color: hsl(235,calc(var(--saturation-factor, 1)*85.6%),64.7%);
    color: white;
    border-radius: 15px;
    font-size: 18px;
    right: 0px;
    bottom: 0px;
    width: 400px;
    height: 70%;
    transition: transform 0.35s ease-in-out;
    cursor: pointer;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.253);
     
    p{
        margin-left: 20px;
    }

    .info-discord{
        display: inline-flex;
        text-align: left;
        width: inherit;
    }
    
    .info-discord icon{
        position: absolute;
        background-color: hsl(235,calc(var(--saturation-factor, 1)*85.6%),64.7%);
        color: white;
        border: none;
        padding-top: 18px;
        right: 15px;
        cursor: pointer;
    }
    
    .iframe-discord{
        border-style: none;
        position: absolute;
        top: 55px;
        left: 0px;
        width: 100%;
        height: -webkit-calc(100% - 55px);
        height: -moz-calc(100% - 55px);
        height: calc(100% - 55px);
    }

    @media screen and (min-width: 1000px){
        transform: ${({ status }) => status ? 'translateY(0px)' : 'translateY(calc(100% - 62px))'};
    }

    @media screen and (max-width: 1000px){
        position: relative;
        top: 50px;
        right: unset;
        bottom: unset;
        width: 80%;
        height: 100vh;
        margin: 0 auto;
        
        .panelButton{
            display: none;
        }

        .info-discord{
            position: relative;
            left: unset;
            width: unset;
            text-align: center;
            font-size: 16px;
            right: 10px;
        }
    }
`;

const Discord = ({ source }) => {
    let [open, setOpen] = useState(false)
    let icon="+";

    if(open){ icon = "-"; }

    if (!source) { return <div>Cargando...</div>; }
    const src = source;     

    return (
        <div>
            <Disc status={open} onClick={() => setOpen(!open)}>
                <div className="info-discord">
                    <p>Discord oficial</p>
                    <icon className="panelButton">{icon}</icon>
                </div>
                <div className="dropup-discord">
                    <iframe className="iframe-discord" src={src}></iframe>
                </div>
            </Disc>
        </div>
    );
};

export default Discord;