import React from 'react';
import {
  HeaderContainer,
  HeaderLogo,
  Menu,
  MenuLinks,
  MenuLink,
} from './styles';
import { MobileMenu } from '../MobileMenu/MobileMenu';

import Logo from '../../assets/TextLogo.png';

const Header = () => {
  const links = ['Home', 'Repositories', 'Summaries', 'Articles'];

  return (
    <>
      {screen.width >= 800 ? (
        <HeaderContainer>
          <HeaderLogo src={Logo} />
          <Menu>
            <MenuLinks>
              {links.map((link) => (
                <MenuLink href={`#${link}`} key={link.length}>
                  {link}
                </MenuLink>
              ))}
            </MenuLinks>
          </Menu>
        </HeaderContainer>
      ) : (
        <MobileMenu />
      )}
    </>
  );
};

export default Header;
