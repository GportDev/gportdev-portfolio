import styled from 'styled-components';

export const Title = styled.h1`
  font-size: var(--h1Desktop);
  font-weight: 700;
  margin-bottom: 0.75rem;
  @media (max-width: 800px) {
    font-size: var(--h1Mobile);
    margin-bottom: 0.5rem;
  }
`;

export const Subtitle = styled.h3`
  font-size: var(--h3Desktop);
  font-weight: 600;
  margin: 0;
  @media (max-width: 800px) {
    font-size: var(--h3Mobile);
  }
`;

export const PlainText = styled.p`
  font-size: var(--pDesktop);
  margin: 3rem auto;
  @media (max-width: 800px) {
    font-size: var(--pMobile);
  }
`;
