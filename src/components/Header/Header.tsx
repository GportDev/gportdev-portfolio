import React from 'react';
import {
  HeaderContainer,
  HeaderLogo,
  MenuHamb,
  HambLink,
  Menu,
  MenuLinks,
  MenuLink,
} from './styles';

import Logo from '../../assets/TextLogo.png';
import HambMenu from '../../assets/HambMenu.png';

const Header = () => {
  const links = ['Home', 'Repositories', 'Summaries', 'Articles'];

  return (
    <HeaderContainer>
      <HeaderLogo src={Logo} />
      {screen.width >= 800 ? (
        <Menu>
          <MenuLinks>
            {links.map((link) => (
              <MenuLink href={`#${link}`} key={link.length}>
                {link}
              </MenuLink>
            ))}
          </MenuLinks>
        </Menu>
      ) : (
        <HambLink href="#">
          <MenuHamb src={HambMenu} />
        </HambLink>
      )}
    </HeaderContainer>
  );
};

export default Header;
