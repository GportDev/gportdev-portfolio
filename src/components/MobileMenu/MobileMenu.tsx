import { useState } from 'react';
import {
  HeaderContainer,
  HeaderLogo,
  MenuHamb,
  MenuLink,
} from '../Header/styles';
import { Container } from './styles';

import HambMenu from '../../assets/HambMenu.png';
import Logo from '../../assets/TextLogo.png';

export interface ContainerProps {
  isVisible?: boolean;
}

export const MobileMenu = () => {
  const links = ['Home', 'Repositories', 'Summaries', 'Articles'];
  const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState(false);

  return (
    <HeaderContainer>
      <HeaderLogo src={Logo} />
      <MenuHamb
        src={HambMenu}
        onClick={() => setMobileMenuIsVisible((prev) => !prev)}
      />
      <Container isVisible={mobileMenuIsVisible}>
        <nav>
          <ul>
            {links.map((link) => (
              <MenuLink href={`#${link}`} key={link.length}>
                {link}
              </MenuLink>
            ))}
          </ul>
        </nav>
      </Container>
    </HeaderContainer>
  );
};
