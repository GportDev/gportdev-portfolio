import styled from 'styled-components';
import { ArrowRight } from 'phosphor-react';

export const CardLink = styled.a`
  text-decoration: none;
`;

export const CardContainer = styled.div`
  background: var(--backgroundGradient);
  padding: 1.5rem 1.25rem;
  gap: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;

  box-shadow: 0px 3.72277px 7.44554px rgba(0, 0, 0, 0.35), inset 0px 1px 4px rgba(173, 235, 255, 0.5), inset 0px -1.5px 4px rgba(55, 170, 156, 0.6);
  border-radius: 16px;

  border: 1px solid #000;

  p {
    font-size: var(--pDesktop);
    color: #FFF;
    text-align: left;
    @media (max-width: 800px) {
      font-size: var(--pMobile);
    }
  }
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0;

  h3 {
    font-size: 1.75rem;
    font-weight: 500;
    margin: 0;
    color: #FFF;
    @media (max-width: 800px) {
      font-size: var(--h3Mobile);
    }
  }
`;

export const GitImg = styled.img`
  clip-path: circle();
  background-color: white;
  margin-left: 1rem;
  width: 48px;
  height: 48px;
  filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.35));

  @media (max-width: 800px) {
    width: 32px;
    height: 32px;
  }
`;

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DevIconsContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const DevIcon = styled.img`
  width: 32px;
`;

export const ArrowIcon = styled(ArrowRight)`
  color: #FFF;
`;
