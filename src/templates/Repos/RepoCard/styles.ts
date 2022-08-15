import styled from 'styled-components';
import { ArrowRight } from 'phosphor-react';

export const CardContainer = styled.div`
  background: #1A1A1B;
  padding: 24px 20px;
  gap: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;

  box-shadow: var(--simpleShadow);
  border-radius: 16px;

  border: 1px solid;
  border-color: var(--borderColor);
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0;
`;

export const GitImg = styled.img`
  border-radius: 50%;
  width: 32px;
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

export const DevIcon = styled.svg`

`;

export const ArrowIcon = styled(ArrowRight)`
  color: #FFF;
`;
