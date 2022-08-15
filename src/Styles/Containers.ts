import styled from 'styled-components';

export const PageContainer = styled.div`
  max-width: 1170px;
  padding: 0 2rem;
  margin: 0 auto;
  gap: 7rem;
  border: 1px solid white;
`;

/* --- HERO --- */
export const HeroSection = styled.section`
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50%;
  @media (max-width: 800px) {
    max-width: 100%;
  }
`;

export const HeroSocialContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2.5rem 0;
  gap: 4rem;
`;

export const HeroImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const HeroImg = styled.img`
  max-width: 100%;
`;
