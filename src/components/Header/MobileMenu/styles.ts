import styled, { css } from 'styled-components';
import { ContainerProps } from './MobileMenu';

export const Container = styled.div<ContainerProps>`
  position: absolute;
  width: calc(100% - 4rem);
  top: 4rem;
  padding: 1rem 2rem;
  margin: 0 2rem;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(100.14deg, rgba(26, 26, 27, 0.9) 24%, rgba(51, 63, 68, 0.9) 92.42%) ;
  border-radius: 0.5rem;
  backdrop-filter: blur(4px);
  border: 2px solid white;

  opacity: 0;
  pointer-events: none;

  transition: 0.5s;
  transform: translateY(-64px);

  ${({ isVisible }) =>
    isVisible &&
    css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);
  `}

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
    gap: 1rem;
  }
`;
