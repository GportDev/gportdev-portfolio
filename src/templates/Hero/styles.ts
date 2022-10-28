import styled from 'styled-components';

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 35rem;
  margin: 0 auto;
  @media (max-width: 800px) {
    max-width: 100%;
  }
`;

export const HeroSocialContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.5rem 0;
  gap: 2rem;
`;
