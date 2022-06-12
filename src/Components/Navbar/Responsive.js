import React, { useState } from 'react';
import "./Navbar.css";
import styled from 'styled-components';
import LeftNav from "./LeftNav";

const ResponsiveStyle = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 13px;
  left: 15px;
  z-index: 20;
  display: none;
  color: gainsboro;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  
  div {
    width: 33px;
    height: 0.25rem;
    background-color: ${({ open }) => open ? 'rgb(206, 180, 166)' : 'rgb(206, 180, 166)'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'opacity(100%)' : 'opacity(0%)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Responsive = ( props ) => {
    let [open, setOpen] = useState(false)
    return (
        <div>
        <ResponsiveStyle className="responsiveHamburger" open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </ResponsiveStyle>
        <LeftNav open={open} props/>
        </div>
    );
}

export default Responsive;