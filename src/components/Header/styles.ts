import styled from 'styled-components';

export const HeaderContainer = styled.header`
  max-width: 1170px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const HeaderLogo = styled.img`
  max-height: 64px;
  @media(max-width: 800px) {
    max-height: 32px;
  }
`;

export const Menu = styled.nav``;

export const MenuLinks = styled.ul`
  display: flex;
  gap: 1.5rem;
  list-style: none;
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: #FFF;
  font-size: 1.25rem;
  :hover {
    color: var(--aquaGreen);
    filter: drop-shadow(0px 0px 16px rgba(148, 243, 228, 0.85));
    transition: 0.2s ease;
  }
`;

export const MenuHamb = styled.img`
  height: 24px;
`;
