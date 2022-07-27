import styled from 'styled-components';
import { LinkedinLogo, EnvelopeSimple, InstagramLogo, List } from 'phosphor-react';

export const LinkIcon = styled.a`
  text-decoration: none;
`;

export const Linkdein = styled(LinkedinLogo)`
  cursor: pointer;
  color: var(--lightBlue);
  :hover {
    color: rgb(202, 242, 256);
    filter: drop-shadow(0px 0px 16px rgba(148, 243, 228, 0.85));
    transition: 0.2s ease;
  }
`;

export const Mail = styled(EnvelopeSimple)`
  cursor: pointer;
  color: var(--lightBlue);
  :hover {
    color: rgb(202, 242, 256);
    filter: drop-shadow(0px 0px 16px rgba(148, 243, 228, 0.85));
    transition: 0.2s ease;
  }
`;

export const Instagram = styled(InstagramLogo)`
  cursor: pointer;
  color: var(--lightBlue);
  :hover {
    color: rgb(202, 242, 256);
    filter: drop-shadow(0px 0px 16px rgba(148, 243, 228, 0.85));
    transition: 0.2s ease;
  }
`;

export const MenuHamb = styled(List)`
  cursor: pointer;
  color: var(--lightBlue);
  :hover {
    color: rgb(202, 242, 256);
    filter: drop-shadow(0px 0px 16px rgba(148, 243, 228, 0.85));
    transition: 0.2s ease;
  }
`;
