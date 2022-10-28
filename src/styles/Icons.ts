import styled from 'styled-components';
import {
  LinkedinLogo,
  EnvelopeSimple,
  GithubLogo,
  MediumLogo,
  CaretDoubleDown,
} from 'phosphor-react';

export const LinkIcon = styled.a`
  text-decoration: none;
`;

export const LinkedIn = styled(LinkedinLogo)`
  cursor: pointer;
  color: var(--aquaGreen);
  :hover {
    color: rgb(202, 242, 256);
    filter: drop-shadow(0px 0px 16px rgba(148, 243, 228, 0.85));
    transition: 0.2s ease;
  }
`;

export const Mail = styled(EnvelopeSimple)`
  cursor: pointer;
  color: var(--aquaGreen);
  :hover {
    color: rgb(202, 242, 256);
    filter: drop-shadow(0px 0px 16px rgba(148, 243, 228, 0.85));
    transition: 0.2s ease;
  }
`;

export const Github = styled(GithubLogo)`
  cursor: pointer;
  color: var(--aquaGreen);
  :hover {
    color: rgb(202, 242, 256);
    filter: drop-shadow(0px 0px 16px rgba(148, 243, 228, 0.85));
    transition: 0.2s ease;
  }
`;

export const Medium = styled(MediumLogo)`
  cursor: pointer;
  color: var(--aquaGreen);
  :hover {
    color: rgb(202, 242, 256);
    filter: drop-shadow(0px 0px 16px rgba(148, 243, 228, 0.85));
    transition: 0.2s ease;
  }
`;

export const DownChevron = styled(CaretDoubleDown)`
  color: rgb(202, 242, 256);
  filter: drop-shadow(0px 0px 16px rgba(148, 243, 228, 0.85));
  margin: 4rem;

  @keyframes moveY {
    0% {transform: translateY(64px);}
    50% {transform: translateY(0);}
    100% {transform: translateY(64px);}
  }

  animation: moveY 1.5s infinite ease-in-out;

  @media (max-width: 800px) {
    margin-top: 2rem;
  }
`;
