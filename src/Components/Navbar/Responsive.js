import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import LeftNav from "./LeftNav";
import "./Navbar.css";

const ResponsiveStyle = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 13px;
  left: 15px;
  z-index: 20;
  display: none;
  color: white;
  @media (max-width: 1000px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }
  
  div {
    width: 33px;
    height: 0.25rem;
    background-color: ${({ open }) => open ? 'black' : 'white'};
    border-radius: 15px;
    transform-origin: 0.12vh;
    transition: all 0.3s linear;
    cursor: pointer;
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
    let [open, setOpen] = useState(props.open);
    let ref = useRef();

    useEffect(() => {
      const checkIfClickedOutside = (e) => {
        if (open && ref.current && !ref.current.contains(e.target)) {
          setOpen(false)
        }
      }

      document.addEventListener("mousedown", checkIfClickedOutside)
      return () => {
        document.removeEventListener("mousedown", checkIfClickedOutside)
      }
    }, [open]) //DOESN'T WORK

    return (
        <div>
        <ResponsiveStyle className="responsiveHamburger" open={open} onClick={() => setOpen(!open)}>
            <div />
            <div />
            <div />
        </ResponsiveStyle>
        <LeftNav props={props} open={open}/>
        </div>
    );
}

export default Responsive;