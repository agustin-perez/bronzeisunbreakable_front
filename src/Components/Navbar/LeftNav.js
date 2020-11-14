import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const Ul = styled.ul`
  @media (max-width: 1000px) {
    transform: ${({ open }) => open ? 'translateX(149vh)' : 'translateX(-100%)'};
  }
`;

const LeftNav = ({open}, props ) => {

  if(open){
    return (
      <Ul open={open}>
        <li><Link className="link" to={'/'}>Inicio</Link></li>
        <li><Link className="link" to={'/status'}>Estado del servidor</Link></li>	
        <li><Link className="link" to={'/changelog'}>Changelog</Link></li>	
      </Ul>
    )
  }

  return (
      <Ul>
        <li><Link className="link" to={'/'}>Inicio</Link></li>
        <li><Link className="link" to={'/status'}>Estado del servidor</Link></li>	
        <li><Link className="link" to={'/changelog'}>Changelog</Link></li>	
      </Ul>
  );
}

export default LeftNav;