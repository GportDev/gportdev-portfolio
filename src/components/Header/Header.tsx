import React from 'react';
import { HeaderContainer, HeaderLogo } from './styles';

import Logo from '../../assets/Logo_quadrado.png';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo src={Logo} />
      <p>Menu Hamb</p>
    </HeaderContainer>
  );
};

export default Header;
