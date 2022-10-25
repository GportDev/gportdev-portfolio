import React from 'react';
import { HeaderContainer, HeaderLogo, MenuLinks, MenuLink } from './styles';
import { MobileMenu } from './MobileMenu/MobileMenu';

import Logo from '../../assets/TextLogo.png';

const Header = () => {
  const links = ['Home', 'Repositories', 'Summaries', 'Articles'];

  return (
    <>
      {screen.width >= 800 ? (
        <HeaderContainer>
          <HeaderLogo src={Logo} />
          <nav>
            <MenuLinks>
              {links.map((link) => (
                <MenuLink href={`#${link}`} key={link.length}>
                  {link}
                </MenuLink>
              ))}
            </MenuLinks>
          </nav>
        </HeaderContainer>
      ) : (
        <MobileMenu />
      )}
    </>
  );
};

export default Header;
