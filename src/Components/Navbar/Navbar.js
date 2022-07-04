import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const Nav = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  z-index: 0;
  
  .logo {
    padding: 15px 0;
  }
`;


const Navbar = ( props ) => {
    return (
          <div className="navBar">
            <Nav>
              <Responsive {...props}/>
            </Nav>
          </div>
    );
}

export default Navbar;
