import React from 'react';
import { HeaderContainer, HeaderLogo } from './styles';

import Logo from '../../assets/Logo_quadrado.png';
import { MenuHamb } from '../../Styles/Icons';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo src={Logo} />
      <MenuHamb size="48" weight="regular" />
    </HeaderContainer>
  );
};

export default Header;
